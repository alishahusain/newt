// make a trie class
class Trie {
    constructor() {
        this.root = {};
    }
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.hasOwnProperty(word[i])) {
                node[word[i]] = {};
            }
            node = node[word[i]];
        }
        node.isWord = true;
    }
    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.hasOwnProperty(word[i])) {
                return false;
            }
            node = node[word[i]];
        }
        return node.hasOwnProperty('isWord');
    }
    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!node.hasOwnProperty(prefix[i])) {
                return false;
            }
            node = node[prefix[i]];
        }
        return true;
    }
}