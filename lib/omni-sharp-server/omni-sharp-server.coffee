fs = require('fs')
spawn = require('child_process').spawn
BrowserWindow = require('remote').require('browser-window')


module.exports =
  class OmniSharpServer
    instance = null

    class OmniSharpServerInstance
      packageDir = atom.packages.packageDirPaths[0];
      location = "#{packageDir}/atom-sharper/server/OmniSharp/bin/Debug/OmniSharp.exe"

      start: () ->
        @child = spawn("mono", [location, "-s", atom?.project?.path, "-p", @getPortNumber(), "-v", "Verbose"])
        @child.stdout.on 'data', @out
        atom.emit("omni-sharp-server:start", @child.pid)
        @child.stderr.on 'data', @err
        @child.on 'close', @close

      out: (data) => atom.emit("omni-sharp-server:out", data.toString())
      err: (data) => atom.emit("omni-sharp-server:err", data.toString())
      close: (data) =>
        atom.emit("omni-sharp-server:close", data)
        @port = null

      getPortNumber: ->
        if @port
          return @port
        windows = BrowserWindow.getAllWindows()
        currentWindow = BrowserWindow.getFocusedWindow().getProcessId()
        index = windows.findIndex (w) => w.getProcessId() ==  currentWindow
        @port = 2000 + index
        @port

      stop: () ->
        @child?.kill "SIGKILL"
        @child = null

      toggle: () -> if @child then @stop() else @start()

    @get: () ->
      instance ?= new OmniSharpServerInstance()