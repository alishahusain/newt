// make an undirected graph class
class UndirectedGraph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
    }
    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }                                                               // add a vertex to the graph
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }                                                               // add an edge to the graph
    toString() {
        let s = '';
        for (let i=0; i<this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j=0; j<neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '';
        }
        return s;
    }                                                               // convert the graph to a string
    initializeColor() {
        let color = [];
        for (let i=0; i<this.vertices.length; i++) {
            color[this.vertices[i]] = 'white';
        }
        return color;
    }                                                               // initialize the color of the vertices
    bfs(v, callback) {
        let color = this.initializeColor(),
            queue = new Queue();
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (let i=0; i<neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }                                                               // breadth first search
    BFS(v) {
        let color = this.initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v);
        for (let i=0; i<this.vertices.length; i++) {
            d[this.vertices[i]] = 0;
            pred[this.vertices[i]] = null;
        }
        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (let i=0; i<neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        };
    }                                                               // breadth first search
    DFS() {
        let color = this.initializeColor();
        for (let i=0; i<this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.DFSVisit(this.vertices[i], color);
            }
        }
    }                                                               // depth first search
    DFSVisit(u, color, callback) {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }
        let neighbors = this.adjList.get(u);
        for (let i=0; i<neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                this.DFSVisit(w, color, callback);
            }
        }
        color[u] = 'black';
    }                                                               // depth first search
    printNode(value) {
        console.log('Visited vertex: ' + value);
    }                                                               // print the node
}
const _UndirectedGraph = UndirectedGraph;
export { _UndirectedGraph as UndirectedGraph };

// questions to ask during a final interview about a project
// 1. What was the most challenging part of the project?
// 2. What was the most rewarding part of the project?
// 3. What did you learn from the project?
// 4. What would you do differently next time?
// 5. What was the most difficult part of the project?

