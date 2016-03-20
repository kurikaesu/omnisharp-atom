// Type definitions for first-mate (v5.2.0)
// Project: https://github.com/atom/first-mate
// Definitions by: david-driscoll <https://github.com/david-driscoll/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Generated by: https://github.com/david-driscoll/atom-typescript-generator
// Generation tool by david-driscoll <https://github.com/david-driscoll/>
/// <reference path="../event-kit/event-kit.d.ts" />
declare module FirstMate {
    /**
     * Registry containing one or more grammars. 
     */
    class GrammarRegistry {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(options? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        clear() : void;
    
        /**
         * Invoke the given callback when a grammar is added to the registry.
         * @param callback - {Function} to call when a grammar is added.
         */
        onDidAddGrammar(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Invoke the given callback when a grammar is updated due to a grammar
         * it depends on being added or removed from the registry.
         * @param callback - {Function} to call when a grammar is updated.
         */
        onDidUpdateGrammar(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Get all the grammars in this registry.
         */
        getGrammars() : Grammar[];
    
        /**
         * Get a grammar with the given scope name.
         * @param scopeName? - A {String} such as `"source.js"`.
         */
        grammarForScopeName(scopeName? : string) : string;
    
        /**
         * Add a grammar to this registry.
         * 
         * A 'grammar-added' event is emitted after the grammar is added.
         * @param grammar? - The {Grammar} to add. This should be a value previously returned from {::readGrammar} or {::readGrammarSync}.
         */
        addGrammar(grammar? : Grammar) : Grammar;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        removeGrammar(grammar? : Grammar) : Grammar;
    
        /**
         * Remove the grammar with the given scope name.
         * @param scopeName? - A {String} such as `"source.js"`.
         */
        removeGrammarForScopeName(scopeName? : string) : string;
    
        /**
         * Read a grammar synchronously but don't add it to the registry.
         * @param grammarPath? - A {String} absolute file path to a grammar file.
         * Returns a {Grammar}.
         */
        readGrammarSync(grammarPath? : string) : Grammar;
    
        /**
         * Read a grammar asynchronously but don't add it to the registry.
         * @param grammarPath? - A {String} absolute file path to a grammar file.
         * @param callback? - A {Function} to call when read with the following arguments:
         */
        readGrammar(grammarPath? : string, callback? : Function) : Grammar;
    
        /**
         * Read a grammar synchronously and add it to this registry.
         * @param grammarPath? - A {String} absolute file path to a grammar file.
         * Returns a {Grammar}.
         */
        loadGrammarSync(grammarPath? : string) : Grammar;
    
        /**
         * Read a grammar asynchronously and add it to the registry.
         * @param grammarPath? - A {String} absolute file path to a grammar file.
         * @param callback? - A {Function} to call when loaded with the following arguments:
         */
        loadGrammar(grammarPath? : string, callback? : Function) : Grammar;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        startIdForScope(scope? : any) : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        endIdForScope(scope? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        scopeForId(id? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        grammarUpdated(scopeName? : string) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        createGrammar(grammarPath? : string, object? : any) : Grammar;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        decodeTokens(lineText? : string, tags? : any, scopeTags? : any, fn? : any) : Atom.Token[];
    
    }

    /**
     * Grammar that tokenizes lines of text.
     */
    class Grammar {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        registry: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        registration: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(registry? : any, options? : any);
    
        /**
         * Invoke the given callback when this grammar is updated due to a
         * grammar it depends on being added or removed from the registry.
         * @param callback - {Function} to call when this grammar is updated.
         */
        onDidUpdate(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Tokenize all lines in the given text.
         * @param text? - A {String} containing one or more lines.
         */
        tokenizeLines(text? : string) : string[];
    
        /**
         * Tokenize the line of text.
         * @param line? - A {String} of text to tokenize.
         * @param ruleStack? - An optional {Array} of rules previously returned from this method. This should be null when tokenizing the first line in the file.
         * @param firstLine? - A optional {Boolean} denoting whether this is the first line in the file which defaults to `false`. This should be `true` when tokenizing the first line in the file.
         */
        tokenizeLine(line? : string, ruleStack? : any[], firstLine? : boolean, compatibilityMode? : any) : number;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        activate() : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        deactivate() : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        clearRules() : Rule[];
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getInitialRule() : Rule;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getRepository() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        addIncludedGrammarScope(scope? : any) : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        grammarUpdated(scopeName? : string) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        startIdForScope(scope? : any) : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        endIdForScope(scope? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        scopeForId(id? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        createRule(options? : any) : Rule;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        createPattern(options? : any) : Pattern;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getMaxTokensPerLine() : number;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        scopesFromStack(stack? : any, rule? : Rule, endPatternMatch? : any) : any;
    
    
        name: string;
    }

    /**
     * TokenizeLineResult
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class TokenizeLineResult {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        line: number;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        openScopeTags: void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        tags: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        ruleStack: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        registry: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(line? : number, openScopeTags? : any, tags? : any, ruleStack? : any, registry? : any);
    
    }

    /**
     * Injections
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class Injections {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        grammar: Grammar;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(grammar? : Grammar, injections? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getScanner(injection? : any) : Scanner;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getScanners(ruleStack? : any) : Scanner[];
    
    }

    /**
     * A grammar with no patterns that is always available from a {GrammarRegistry}
     * even when it is completely empty. 
     */
    class NullGrammar extends Grammar {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(registry? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getScore() : any;
    
    }

    /**
     * Pattern
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class Pattern {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        grammar: Grammar;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        registry: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(grammar? : Grammar, registry? : any, options? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getRegex(firstLine? : number, position? : TextBuffer.Point | { row: number; column: number } | [number, number], anchorPosition? : TextBuffer.Point | { row: number; column: number } | [number, number]) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        hasAnchor() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        replaceAnchor(firstLine? : number, offset? : any, anchor? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        resolveBackReferences(line? : number, beginCaptureIndices? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        ruleForInclude(baseGrammar? : Grammar, name? : string) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getIncludedPatterns(baseGrammar? : Grammar, included? : any) : Pattern[];
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        resolveScopeName(scopeName? : string, line? : number, captureIndices? : any) : string;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        handleMatch(stack? : any, line? : number, captureIndices? : any, rule? : Rule, endPatternMatch? : any) : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        tagsForCaptureRule(rule? : Rule, line? : number, captureStart? : any, captureEnd? : any, stack? : any) : Rule;
    
        /**
         * Get the tokens for the capture indices.
         * 
         * line - The string being tokenized.
         * currentCaptureIndices - The current array of capture indices being
         *                         processed into tokens. This method is called
         *                         recursively and this array will be modified inside
         *                         this method.
         * allCaptureIndices - The array of all capture indices, this array will not
         *                     be modified.
         * stack - An array of rules.
         * This field or method was marked private by atomdoc. Use with caution.
         * Returns a non-null but possibly empty array of tokens
         */
        tagsForCaptureIndices(line? : number, currentCaptureIndices? : any, allCaptureIndices? : any, stack? : any) : any;
    
    }

    /**
     * Rule
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class Rule {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        grammar: Grammar;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        registry: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        scopeName: string;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        contentScopeName: string;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        endPattern: Pattern;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        applyEndPatternLast: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(grammar? : Grammar, registry? : any, options? : (scopeName? : string,contentScopeName? : string,patterns? : Pattern[],endPattern? : Pattern,applyEndPatternLast? : any) => any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getIncludedPatterns(baseGrammar? : Grammar, included? : any) : Pattern[];
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        clearAnchorPosition() : TextBuffer.Point;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getScanner(baseGrammar? : Grammar) : Scanner;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        scanInjections(ruleStack? : any, line? : number, position? : TextBuffer.Point | { row: number; column: number } | [number, number], firstLine? : number) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        normalizeCaptureIndices(line? : number, captureIndices? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        findNextMatch(ruleStack? : any, line? : number, position? : TextBuffer.Point | { row: number; column: number } | [number, number], firstLine? : number) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getNextTags(ruleStack? : any, line? : number, position? : TextBuffer.Point | { row: number; column: number } | [number, number], firstLine? : number) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getRuleToPush(line? : number, beginPatternCaptureIndices? : any) : any;
    
    }

    /**
     * Wrapper class for {OnigScanner} that caches them based on the presence of any
     * anchor characters that change based on the current position being scanned.
     */
    class Scanner {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        patterns: Pattern[];
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(patterns? : Pattern[]);
    
        /**
         * Create a new {OnigScanner} with the given options. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        createScanner(firstLine? : number, position? : TextBuffer.Point | { row: number; column: number } | [number, number], anchorPosition? : TextBuffer.Point | { row: number; column: number } | [number, number]) : Scanner;
    
        /**
         * Get the {OnigScanner} for the given position and options. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        getScanner(firstLine? : number, position? : TextBuffer.Point | { row: number; column: number } | [number, number], anchorPosition? : TextBuffer.Point | { row: number; column: number } | [number, number]) : Scanner;
    
        /**
         * Find the next match on the line start at the given position
         * 
         * line - the string being scanned.
         * firstLine - true if the first line is being scanned.
         * position - numeric position to start scanning at.
         * anchorPosition - numeric position of the last anchored match.
         * Returns an Object with details about the match or null if no match found.
         */
        findNextMatch(line? : number, firstLine? : number, position? : TextBuffer.Point | { row: number; column: number } | [number, number], anchorPosition? : TextBuffer.Point | { row: number; column: number } | [number, number]) : any;
    
        /**
         * Handle the given match by calling `handleMatch` on the
         * matched {Pattern}.
         * 
         * match - An object returned from a previous call to `findNextMatch`.
         * stack - An array of {Rule} objects.
         * line - The string being scanned.
         * rule - The rule that matched.
         * endPatternMatch - true if the rule's end pattern matched.
         */
        handleMatch(match? : any, stack? : any, line? : number, rule? : Rule, endPatternMatch? : any) : void;
    
    }

    /**
     * SegmentMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class SegmentMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(segments? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(scope? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * TrueMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class TrueMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor();
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * ScopeMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class ScopeMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(first? : any, others? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(scope? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * PathMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class PathMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(first? : any, others? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(scopes? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * OrMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class OrMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        left: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        right: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(left? : any, right? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(scopes? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * AndMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class AndMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        left: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        right: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(left? : any, right? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(scopes? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * NegateMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class NegateMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matcher: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(matcher? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(scopes? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * CompositeMatcher
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class CompositeMatcher {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(left? : any, operator? : any, right? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(scopes? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

    /**
     * ScopeSelector
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class ScopeSelector {
        /**
         * Create a new scope selector.
         * 
         * source - A {String} to parse as a scope selector. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        constructor(source? : any);
    
        /**
         * Check if this scope selector matches the scopes.
         * 
         * scopes - An {Array} of {String}s or a single {String}.
         * This field or method was marked private by atomdoc. Use with caution.
         * Returns a {Boolean}.
         */
        matches(scopes? : any) : boolean;
    
        /**
         * Convert this TextMate scope selector to a CSS selector.
         * This field or method was marked private by atomdoc. Use with caution.
         */
        toCssSelector() : ScopedPropertyStore.Selector;
    
    }

}
declare module "first-mate" {
    class ScopeSelector extends FirstMate.ScopeSelector {}
    class GrammarRegistry extends FirstMate.GrammarRegistry {}
    class Grammar extends FirstMate.Grammar {}
}
