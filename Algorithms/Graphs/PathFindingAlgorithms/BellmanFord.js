// make a BellmanFord class
class BellmanFord {
    constructor(graph, source) {
        this.graph = graph;
        this.source = source;
        this.distances = new Array(this.graph.size).fill(Infinity);
        this.distances[this.source] = 0;
        this.bellmanFord();
    }
    bellmanFord() {
        for (let i = 0; i < this.graph.size - 1; i++) {
            for (let j = 0; j < this.graph.size; j++) {
                for (let k = 0; k < this.graph.size; k++) {
                    if (this.graph.matrix[j][k] !== 0) {
                        const distance = this.distances[j] + this.graph.matrix[j][k];
                        if (distance < this.distances[k]) {
                            this.distances[k] = distance;
                        }
                    }
                }
            }
        }
    }
}
