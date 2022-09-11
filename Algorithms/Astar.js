
//A*: when you want to find the shortest path between two vertices in a graph with negative weightss
class AStar {
    constructor(graph, start, end) {
        this.graph = graph;
        this.start = start;
        this.end = end;
        this.openSet = new Queue();
        this.openSet.enqueue(start);
        this.cameFrom = new Array(graph.size).fill(null);
        this.gScore = new Array(graph.size).fill(Infinity);
        this.gScore[start] = 0;
        this.fScore = new Array(graph.size).fill(Infinity);
        this.fScore[start] = this.heuristicCostEstimate(start, end);
        this.path = [];
    }
    heuristicCostEstimate(start, end) {
        return Math.abs(start - end);
    }
    reconstructPath() {
        const path = new Stack();
        let current = this.end;
        path.push(current);
        while (this.cameFrom[current]) {
            current = this.cameFrom[current];
            path.push(current);
        }
        return path;
    }
    findPath() {
        while (!this.openSet.isEmpty()) {
            let current = this.openSet.dequeue();
            if (current === this.end) {
                this.path = this.reconstructPath();
                return this.path;
            }
            for (let neighbor = 0; neighbor < this.graph.size; neighbor++) {
                if (this.graph.matrix[current][neighbor] === 0) {
                    continue;
                }
                let tentativeGScore = this.gScore[current] + 1;
                if (tentativeGScore < this.gScore[neighbor]) {
                    this.cameFrom[neighbor] = current;
                    this.gScore[neighbor] = tentativeGScore;
                    this.fScore[neighbor] = this.gScore[neighbor] + this.heuristicCostEstimate(neighbor, this.end);
                    if (!this.openSet.items.includes(neighbor)) {
                        this.openSet.enqueue(neighbor);
                    }
                }
            }
        }
        return false;
    }
}