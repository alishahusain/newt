// make a hash table class
class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size).fill().map(() => new Map());
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    set(key, value) {
        const bucket = this.buckets[this.hash(key)];
        bucket.set(key, value);
    }
    get(key) {
        const bucket = this.buckets[this.hash(key)];
        return bucket.get(key);
    }
    has(key) {
        const bucket = this.buckets[this.hash(key)];
        return bucket.has(key);
    }
    delete(key) {
        const bucket = this.buckets[this.hash(key)];
        return bucket.delete(key);
    }
    clear() {
        this.buckets = new Array(this.size).fill().map(() => new Map());
    }
    size() {
        let count = 0;
        for (let i = 0; i < this.size; i++) {
            count += this.buckets[i].size;
        }
        return count;
    }
    keys() {
        const keys = [];
        for (let i = 0; i < this.size; i++) {
            for (let key of this.buckets[i].keys()) {
                keys.push(key);
            }
        }
        return keys;
    }
    values() {
        const values = [];
        for (let i = 0; i < this.size; i++) {
            for (let value of this.buckets[i].values()) {
                values.push(value);
            }
        }
        return values;
    }
    entries() {
        const entries = [];
        for (let i = 0; i < this.size; i++) {
            for (let entry of this.buckets[i].entries()) {
                entries.push(entry);
            }
        }
        return entries;
    }
}
