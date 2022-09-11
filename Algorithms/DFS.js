// make a DFS class
class DFS {
    constructor(graph) {
        this.graph = graph;
        this.vertices = [];
        this.dfs();
    }
    dfs() {
        const stack = new Stack();
        const visited = new Array(this.graph.size).fill(false);
        stack.push(0);
        visited[0] = true;
        while (!stack.isEmpty()) {
            const vertex = stack.pop();
            this.vertices.push(vertex);
            for (let i = 0; i < this.graph.size; i++) {
                if (this.graph.matrix[vertex][i] !== 0 && !visited[i]) {
                    stack.push(i);
                    visited[i] = true;
                }
            }
        }
    }
}
// when you want to traverse a graph in a depth-first manner
// why do you traverse pre-order? because you want to visit the root node first
// why do you traverse post-order? because you want to visit the leaf nodes first
