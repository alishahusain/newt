// make an adjacency matrix class
class AdjacencyMatrix {
    constructor(size) {
        this.size = size;
        this.matrix = new Array(size).fill(0).map(() => new Array(size).fill(0));
    }
    addEdge(vertex1, vertex2) {
        this.matrix[vertex1][vertex2] = 1;
        this.matrix[vertex2][vertex1] = 1;
    }
    removeEdge(vertex1, vertex2) {
        this.matrix[vertex1][vertex2] = 0;
        this.matrix[vertex2][vertex1] = 0;
    }
    print() {
        console.log(this.matrix.map(row => row.join(' ')).join(''));
    }
}
// give an example of how to use the adjacency matrix class
const adjacencyMatrix = new AdjacencyMatrix(5);
adjacencyMatrix.addEdge(0, 1);
adjacencyMatrix.addEdge(0, 2);
adjacencyMatrix.addEdge(1, 3);
adjacencyMatrix.addEdge(2, 4);
adjacencyMatrix.print();



