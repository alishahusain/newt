import {PriorityQueue} from '../DataStructures/Queues/PriorityQueue.js';
import {WeightedGraph} from '../DataStructures/Graphs/WeightedGraph.js';
  class Dijkstra {
    constructor(start, finish, adjacencyList){
        this.start = start;
        this.finish = finish;
        this.adjacencyList = adjacencyList;
    }
    findShortestPath(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; //to return at end
        let smallest;
        //build up initial state
        console.log(this.adjacencyList);
        for (let vertex in this.adjacencyList) {
          if (vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
          } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
        }
        console.log(nodes.items.length)
        // as long as there is something to visit
        while (nodes.items.length) {
          smallest = nodes.dequeue().item;
          if (smallest === finish) {
            //WE ARE DONE
            //BUILD UP PATH TO RETURN AT END
            while (previous[smallest]) {
              path.push(smallest);
              smallest = previous[smallest];
            }
            break;
          }
          if (smallest || distances[smallest] !== Infinity) {
            for (let neighbor in this.adjacencyList[smallest]) {
              //find neighboring node
              let nextNode = this.adjacencyList[smallest][neighbor];
              //calculate new distance to neighboring node
              let candidate = distances[smallest] + nextNode.weight;
              let nextNeighbor = nextNode.node;
              if (candidate < distances[nextNeighbor]) {
                //updating new smallest distance to neighbor
                distances[nextNeighbor] = candidate;
                //updating previous - How we got to neighbor
                previous[nextNeighbor] = smallest;
                //enqueue in priority queue with new priority
                nodes.enqueue(nextNeighbor, candidate);
              }
            }
          }
        }
        return path.concat(smallest).reverse();
      }
  }
  
  
  
  //EXAMPLES=====================================================================
  
  let weighedGraph = new WeightedGraph();
  weighedGraph.addVertex("A");
  weighedGraph.addVertex("B");
  weighedGraph.addVertex("C");
  weighedGraph.addVertex("D");
  weighedGraph.addVertex("E");
  weighedGraph.addVertex("F");
  
  weighedGraph.addEdge("A", "B", 4);
  weighedGraph.addEdge("A", "C", 2);
  weighedGraph.addEdge("B", "E", 3);
  weighedGraph.addEdge("C", "D", 2);
  weighedGraph.addEdge("C", "F", 4);
  weighedGraph.addEdge("D", "E", 3);
  weighedGraph.addEdge("D", "F", 1);
  weighedGraph.addEdge("E", "F", 1);
  let dijkstra = new Dijkstra("A", "E", weighedGraph.adjacencyList);
  console.log(dijkstra.findShortestPath("A", "E"));
