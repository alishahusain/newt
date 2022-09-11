// make a TopologicalSort class
class TopologicalSort {
    constructor(graph) {
        this.graph = graph;
        this.vertices = [];
        this.topologicalSort();
    }
    topologicalSort() {
        const stack = new Stack();
        const visited = new Array(this.graph.size).fill(false);
        for (let i = 0; i < this.graph.size; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }
        while (!stack.isEmpty()) {
            this.vertices.push(stack.pop());
        }
    }
    topologicalSortUtil(vertex, visited, stack) {
        visited[vertex] = true;
        for (let i = 0; i < this.graph.size; i++) {
            if (this.graph.matrix[vertex][i] !== 0 && !visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }
        stack.push(vertex);
    }
}