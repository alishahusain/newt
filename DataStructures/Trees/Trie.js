// make a Trie class
class Trie {
    constructor() {
        this.root = {};
        this.endSymbol = '*';
    }
    add(word) {
        let current = this.root;
        for (const letter of word) {
            if (!(letter in current)) current[letter] = {};
            current = current[letter];
        }
        current[this.endSymbol] = word;
    }
    contains(word) {
        let current = this.root;
        for (const letter of word) {
            if (!(letter in current)) return false;
            current = current[letter];
        }
        return this.endSymbol in current;
    }
}

const _Trie = Trie;
export { _Trie as Trie };