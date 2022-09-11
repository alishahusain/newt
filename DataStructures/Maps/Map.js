// make map class
class Map {
    constructor() {
        this.map = {};
    }
    set(key, value) {
        this.map[key] = value;
    }
    get(key) {
        return this.map[key];
    }
    has(key) {
        return this.map.hasOwnProperty(key);
    }
    delete(key) {
        delete this.map[key];
    }
    clear() {
        this.map = {};
    }
    size() {
        return Object.keys(this.map).length;
    }
    keys() {
        return Object.keys(this.map);
    }
    values() {
        return Object.values(this.map);
    }
    entries() {
        return Object.entries(this.map);
    }
}