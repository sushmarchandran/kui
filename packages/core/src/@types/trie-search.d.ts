declare module 'trie-search' {
  interface ConverterOptions {
    /** The default foreground color used when reset color codes are encountered. */
    fg?: string
    /** The default background color used when reset color codes are encountered. */
    bg?: string
    /** Convert newline characters to `<br/>`. */
    newline?: boolean
    /** Generate HTML/XML entities. */
    escapeXML?: boolean
    /** Save style state across invocations of `toHtml()`. */
    stream?: boolean
    /** Can override specific colors or the entire ANSI palette. */
    colors?: string[] | {[code: number]: string}
  }

  class TrieSearch<V extends any> {
    constructor(name?: string)
    map(key: string, value: V): void
    get(key: string): V[]
  }

  export default TrieSearch
}