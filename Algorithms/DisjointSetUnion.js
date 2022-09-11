// make DisjointSetUnion class
class DisjointSetUnion {
    constructor(size) {
        this.size = size;
        this.parent = new Array(size).fill().map((_, i) => i);
        this.rank = new Array(size).fill(1);
    }
    find(x) {
        if (this.parent[x] === x) {
            return x;
        }
        return this.parent[x] = this.find(this.parent[x]);
    }
    union(x, y) {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        if (xRoot === yRoot) {
            return;
        }
        if (this.rank[xRoot] < this.rank[yRoot]) {
            this.parent[xRoot] = yRoot;
        } else if (this.rank[xRoot] > this.rank[yRoot]) {
            this.parent[yRoot] = xRoot;
        } else {
            this.parent[yRoot] = xRoot;
            this.rank[xRoot]++;
        }
    }
}
