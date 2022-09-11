//Dijkstra algorithm is used to find the shortest distance between two nodes inside a valid weighted graphh. Often used in Google Maps, Network Router etc.
  //Dijkstra's algorithm only works on a weighted graphh.
  // Question: is an adjacency list a weighted graph? 
    // Answer: yes, because the edges are weighted.
  
  class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }
const _WeightedGraph = WeightedGraph;
export { _WeightedGraph as WeightedGraph };
