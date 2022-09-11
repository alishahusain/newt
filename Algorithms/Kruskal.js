//Kruskal’s Minimum Spanning Tree Algorithm 

// write kruskal's algorithm here
function kruskal(graph) {
    let minimumSpanningTree = new Graph();
    let sortedEdges = graph.edges.sort(function(a, b) {
        return a.weight - b.weight;
    });
    for (let i=0; i<sortedEdges.length; i++) {
        let edge = sortedEdges[i];
        if (!minimumSpanningTree.findCycle(edge.source, edge.destination)) {
            minimumSpanningTree.addEdge(edge.source, edge.destination, edge.weight);
        }
    }
    return minimumSpanningTree;
}
// create a graph
let graph = new Graph();
let myVertices = ['A','B','C','D','E','F','G','H','I'];
for (let i=0; i<myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'H', 8);
graph.addEdge('B', 'C', 8);
graph.addEdge('B', 'H', 11);
graph.addEdge('C', 'D', 7);
graph.addEdge('C', 'F', 4);
graph.addEdge('C', 'I', 2);
graph.addEdge('D', 'E', 9);
graph.addEdge('D', 'F', 14);



// difference between krushkal's algorithm and dijkstra's algorithm
// dijkstra's algorithm finds the shortest path from one node to another
// kruskal's algorithm finds the minimum spanning tree

// difference between a minimum spanning tree and a shortest path
// a minimum spanning tree is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight.

// difference between a minimum spanning tree and a minimum spanning forest
// a minimum spanning forest is a collection of minimum spanning trees

// difference between dijkstra's algorithm and prim's algorithm
// dijkstra's algorithm finds the shortest path from one node to another
// prim's algorithm finds the minimum spanning tree

// difference between prim's algorithm and kruskal's algorithm
// prim's algorithm finds the minimum spanning tree
// kruskal's algorithm finds the minimum spanning tree

// prim's algorithm is a greedy algorithm
// kruskal's algorithm is a greedy algorithm

// difference between prim's algorithm and kruskal's algorithm : prim uses a priority queue and kruskal uses a sorted list


// whats the difference between a greedy algorithm and a dynamic programming algorithm
// a greedy algorithm makes the locally optimal choice at each stage with the hope of finding a global optimum
// a dynamic programming algorithm solves each subproblem just once and then saves its answer in a table


// whats the difference between a greedy algorithm and a divide and conquer algorithm
// a greedy algorithm makes the locally optimal choice at each stage with the hope of finding a global optimum
// a divide and conquer algorithm breaks down a problem into subproblems of the same type, recursively solves the subproblems, and then combines the solutions to the subproblems to solve the original problem


