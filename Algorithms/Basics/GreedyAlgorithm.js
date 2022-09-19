// give an example a greedy algorithm


function greedyAlgorithm(graph) {
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
