import { Stack } from './Stack.js';
import { Queue } from '../DataStructures/Queues/Queue.js';
import { PriorityQueue } from '../DataStructures/Queues/PriorityQueue.js';

// make a graph class
class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
    }
    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }                                                               // add a vertex to the graph
    addEdge(v, w, weight) {
        this.adjList.get(v).push({w, weight});
        this.adjList.get(w).push({v, weight});
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
            for (let i=0; i<neighbors.length; i++){
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            color[u] = 'black';
            }
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
    }                                                               // depth first search visit
    printNode(value) {
        console.log('Visited vertex: ' + value);
    }                                                               // print a node
    shortestPath(v) {
        let fromVertex = v,
            s = new Stack(),
            d = this.BFS(v),
            pred = d.predecessors,
            path = [];
        for (let i=0; i<this.vertices.length; i++) {
            let toVertex = this.vertices[i],
                path = new Stack();
            for (let v=toVertex; v!==fromVertex; v=pred[v]) {
                s.push(v);
            }
            s.push(fromVertex);
            let s1 = '';
            while (!s.isEmpty()) {
                s1 += s.pop() + '-';
            }
            path.push(s1.substring(0, s1.length-1));
        }
        return path;
    }                                                               // shortest path
    dijkstra(v) {
        let color = this.initializeColor(),
            d = [],
            pred = [];
        let pq = new PriorityQueue();
        pq.enqueue(v, 0);
        for (let i=0; i<this.vertices.length; i++) {
            d[this.vertices[i]] = 0;
            pred[this.vertices[i]] = null;
        }
        while (!pq.isEmpty()) {
            let u = pq.dequeue().element,
                neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (let i=0; i<neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    if (d[w] > d[u] + w.weight) {
                        d[w] = d[u] + w.weight;
                        pred[w] = u;
                    }
                    pq.enqueue(w, d[w]);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        };
    }                                                               // dijkstra
    floydWarshall() {
        let dist = [],
            pred = [];
        for (let i=0; i<this.vertices.length; i++) {
            dist[this.vertices[i]] = [];
            pred[this.vertices[i]] = [];
            for (let j=0; j<this.vertices.length; j++) {
                dist[this.vertices[i]][this.vertices[j]] = Infinity;
                pred[this.vertices[i]][this.vertices[j]] = null;
            }
        }
        for (let i=0; i<this.vertices.length; i++) {
            dist[this.vertices[i]][this.vertices[i]] = 0;
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j=0; j<neighbors.length; j++) {
                let w = neighbors[j];
                dist[this.vertices[i]][w] = w.weight;
                pred[this.vertices[i]][w] = this.vertices[i];
            }
        }
        for (let k=0; k<this.vertices.length; k++) {
            for (let i=0; i<this.vertices.length; i++) {
                for (let j=0; j<this.vertices.length; j++) {
                    let sum = dist[this.vertices[i]][this.vertices[k]] + dist[this.vertices[k]][this.vertices[j]];
                    if (sum < dist[this.vertices[i]][this.vertices[j]]) {
                        dist[this.vertices[i]][this.vertices[j]] = sum;
                        pred[this.vertices[i]][this.vertices[j]] = pred[this.vertices[k]][this.vertices[j]];
                    }
                }
            }
        }
        return {
            distances: dist,
            predecessors: pred
        };
    }                                                               // floyd warshall
    topologicalSort() {
        let color = this.initializeColor(),
            stack = new Stack();
        for (let i=0; i<this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.topologicalSortVisit(this.vertices[i], color, stack);
            }
        }
        return stack;
    }                                                               // topological sort
    topologicalSortVisit(u, color, stack) {
        color[u] = 'grey';
        let neighbors = this.adjList.get(u);
        for (let i=0; i<neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                this.topologicalSortVisit(w, color, stack);
            }
        }
        color[u] = 'black';
        stack.push(u);
    }                                                               // topological sort visit
    printPath(vertices, fromVertex, toVertex) {
        let s = new Stack(),
            u = toVertex;
        while (u!==fromVertex) {
            s.push(u);
            u = vertices[u];
        }
        s.push(u);
        let s1 = '';
        while (!s.isEmpty()) {
            s1 += s.pop() + '-';
        }
        return s1.substring(0, s1.length-1);
    }                                                               // print path
    print() {
        for (let i=0; i<this.vertices.length; i++) {
            console.log(this.vertices[i] + ' -> ');
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j=0; j<neighbors.length; j++) {
                console.log(neighbors[j] + ' ');
            }
            console.log();
        }
    }                                                               // print
}    


const _Graph = Graph;
export { _Graph as Graph};

// difference between Graph.BFS and Graph.bfs 
// Graph.BFS is a static method, Graph.bfs is an instance method
// why? because Graph.BFS is a class method, Graph.bfs is an object method

// give example of using class Graph
let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i=0; i<myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('B', 'E');
graph.addEdge('C', 'D');
graph.addEdge('C', 'F');
console.log(graph.toString());
console.log('*********DFS*********');
graph.DFS(myVertices[0]);
console.log('*********BFS*********');
graph.BFS(myVertices[0]);
console.log('*********Shortest Path*********');
let shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA.distances);




// when to use which algorithm
// BFS: when you want to find the shortest path between two vertices
// DFS: when you want to find all the paths between two vertices
// Dijkstra: when you want to find the shortest path between two vertices
// Floyd Warshall: when you want to find the shortest path between all vertices
// Topological Sort: when you want to find the order of vertices in a directed acyclic graph
// Prim: when you want to find the minimum spanning tree of a graph
// Kruskal: when you want to find the minimum spanning tree of a graph
// Bellman-Ford: when you want to find the shortest path between two vertices in a graph with negative weights
// A*: when you want to find the shortest path between two vertices in a graph with negative weights

// when to use which data structure
// Stack: when you want to store a list of elements and access them in a LIFO order
// Queue: when you want to store a list of elements and access them in a FIFO order
// Set: when you want to store a list of unique elements
// Map: when you want to store a list of key-value pairs
// Linked List: when you want to store a list of elements and access them in a sequential order
// Doubly Linked List: when you want to store a list of elements and access them in a sequential order
// Binary Search Tree: when you want to store a list of elements and access them in a sorted order
// Heap: when you want to store a list of elements and access them in a sorted order
// Graph: when you want to store a list of vertices and edges
// Hash Table: when you want to store a list of key-value pairs and access them in a constant time

// when to use which sorting algorithm
// Bubble Sort: when you want to sort a list of elements in ascending order
// Selection Sort: when you want to sort a list of elements in ascending order
// Insertion Sort: when you want to sort a list of elements in ascending order
// Merge Sort: when you want to sort a list of elements in ascending order
// Quick Sort: when you want to sort a list of elements in ascending order
// Heap Sort: when you want to sort a list of elements in ascending order
// Bucket Sort: when you want to sort a list of elements in ascending order
// Radix Sort: when you want to sort a list of elements in ascending order

// when to use which searching algorithm
// Linear Search: when you want to search for an element in a list of elements
// Binary Search: when you want to search for an element in a sorted list of elements
// Breadth First Search: when you want to search for an element in a graph
// Depth First Search: when you want to search for an element in a graph
// Hash Table: when you want to search for an element in a list of key-value pairs

// when to use which pattern
// Singleton: when you want to restrict the instantiation of a class to one object
// Factory: when you want to create objects without exposing the instantiation logic to the client
// Observer: when you want to create a subscription model to notify multiple objects about any events that happen to the object they are observing
// Mediator: when you want to reduce coupling between classes that communicate with each other. Instead of classes communicating with each other, the classes will communicate with a mediator object
// Decorator: when you want to add new functionality to an existing object without altering its structure

// when to use which design principle
// Single Responsibility Principle: when you want to make sure that a class has only one reason to change
// Open-Closed Principle: when you want to make sure that a class is open for extension but closed for modification
// Liskov Substitution Principle: when you want to make sure that a subclass can be used in place of its parent class without breaking the application
// Interface Segregation Principle: when you want to make sure that a class only implements the methods that it needs
// Dependency Inversion Principle: when you want to make sure that a class depends on abstraction and not on concretion

// when to use which design pattern
// Factory: when you want to create objects without exposing the instantiation logic to the client
// Abstract Factory: when you want to create families of related objects without exposing the instantiation logic to the client
// Builder: when you want to separate the construction of a complex object from its representation so that the same construction process can create different representations
// Prototype: when you want to create objects based on a template of an existing object through cloning
// Singleton: when you want to restrict the instantiation of a class to one object
// Adapter: when you want to convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces
// Bridge: when you want to decouple an abstraction from its implementation so that the two can vary independently
// Composite: when you want to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly
// Decorator: when you want to add new functionality to an existing object without altering its structure
// Facade: when you want to provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use
// Flyweight: when you want to use sharing to support large numbers of fine-grained objects efficiently
// Proxy: when you want to provide a placeholder for another object to control access, reduce cost, and reduce complexity
// Chain of Responsibility: when you want to avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it
// Command: when you want to parameterize objects with commands
// Interpreter: when you want to define a representation for a grammar of the given language, along with an interpreter that uses the representation to interpret sentences in the language
// Iterator: when you want to provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation
// Mediator: when you want to reduce coupling between classes that communicate with each other. Instead of classes communicating with each other, the classes will communicate with a mediator object
// Memento: when you want to capture and externalize an object's internal state so that the object can be restored to this state later, without violating encapsulation
// Observer: when you want to create a subscription model to notify multiple objects about any events that happen to the object they are observing
// State: when you want an object to alter its behavior when its internal state changes. The object will appear to change its class
// Strategy: when you want to define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it
// Template Method: when you want to define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure
// Visitor: when you want to define a new operation to a class without changing the class. You want to separate an algorithm from an object structure on which it operates


