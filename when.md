##when to use which algorithm
        
        BFS: when you want to find the shortest path between two vertices
        DFS: when you want to find all the paths between two vertices
        Dijkstra: when you want to find the shortest path between two vertices
        Floyd Warshall: when you want to find the shortest path between all vertices
        Topological Sort: when you want to find the order of vertices in a directed acyclic graph
        Prim: when you want to find the minimum spanning tree of a graph
        Kruskal: when you want to find the minimum spanning tree of a graph
        Bellman-Ford: when you want to find the shortest path between two vertices in a graph with negative weights
        A*: when you want to find the shortest path between two vertices in a graph with negative weights
        Sliding Window: when you want to find the longest or smallest substring or subarray that contains all the characters of a given string
        Merge Intervals: when you want to merge overlapping intervals
        Two Pointers: when you want to find a pair, triplet, or a subarray that satisfies a given condition
        Backtracking: when you want to find all the possible solutions to a problem
        Dynamic Programming: when you want to find the optimal solution to a problem
        Fast and Slow Pointers: when you want to find the middle or detect a cycle in a linked list
        Two Heaps: when you want to find the median of a list of numbers or the kth largest or smallest element in a list
        K-way Merge: when you want to merge k sorted lists into one sorted list
        Top K Elements: when you want to find the k largest or smallest elements in a list
        Subsets: when you want to find all the subsets of a given set
        Modified Binary Search: when you want to find the position of an element in a sorted list or find the first or last occurrence of an element in a sorted list
        Bitwise XOR: when you want to find the missing number or find the duplicate number in a list
        Combinatorics: when you want to find the number of ways to do something


##when to use which data structure

        Stack: when you want to store a list of elements and access them in a LIFO order
        Queue: when you want to store a list of elements and access them in a FIFO order
        Set: when you want to store a list of unique elements
        Map: when you want to store a list of key-value pairs
        Linked List: when you want to store a list of elements and access them in a sequential order
        Doubly Linked List: when you want to store a list of elements and access them in a sequential order
        Binary Search Tree: when you want to store a list of elements and access them in a sorted order
        Heap: when you want to store a list of elements and access them in a sorted order
        Graph: when you want to store a list of vertices and edges
        Hash Table: when you want to store a list of key-value pairs and access them in a constant time
        
##when to use which sorting algorithm

        Bubble Sort: when you want to sort a list of elements in ascending order
        Selection Sort: when you want to sort a list of elements in ascending order
        Insertion Sort: when you want to sort a list of elements in ascending order
        Merge Sort: when you want to sort a list of elements in ascending order
        Quick Sort: when you want to sort a list of elements in ascending order
        Heap Sort: when you want to sort a list of elements in ascending order
        Bucket Sort: when you want to sort a list of elements in ascending order
        Radix Sort: when you want to sort a list of elements in ascending order
        
##when to use which searching algorithm

        Linear Search: when you want to search for an element in a list of elements
        Binary Search: when you want to search for an element in a sorted list of elements
        Breadth First Search: when you want to search for an element in a graph
        Depth First Search: when you want to search for an element in a graph
        Hash Table: when you want to search for an element in a list of key-value pairs
        
##when to use which pattern

        Singleton: when you want to restrict the instantiation of a class to one object
        Factory: when you want to create objects without exposing the instantiation logic to the client
        Observer: when you want to create a subscription model to notify multiple objects about any events that happen to the object they are observing
        Mediator: when you want to reduce coupling between classes that communicate with each other. Instead of classes communicating with each other, the classes will communicate with a mediator object
        Decorator: when you want to add new functionality to an existing object without altering its structure
        
##when to use which design principle

        Single Responsibility Principle: when you want to make sure that a class has only one reason to change
        Open-Closed Principle: when you want to make sure that a class is open for extension but closed for modification
        Liskov Substitution Principle: when you want to make sure that a subclass can be used in place of its parent class without breaking the application
        Interface Segregation Principle: when you want to make sure that a class only implements the methods that it needs
        Dependency Inversion Principle: when you want to make sure that a class depends on abstraction and not on concretion
        
##when to use which design pattern

        Factory: when you want to create objects without exposing the instantiation logic to the client
        Abstract Factory: when you want to create families of related objects without exposing the instantiation logic to the client
        Builder: when you want to separate the construction of a complex object from its representation so that the same construction process can create different representations
        Prototype: when you want to create objects based on a template of an existing object through cloning
        Singleton: when you want to restrict the instantiation of a class to one object
        Adapter: when you want to convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces
        Bridge: when you want to decouple an abstraction from its implementation so that the two can vary independently
        Composite: when you want to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly
        Decorator: when you want to add new functionality to an existing object without altering its structure
        Facade: when you want to provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use
        Flyweight: when you want to use sharing to support large numbers of fine-grained objects efficiently
        Proxy: when you want to provide a placeholder for another object to control access, reduce cost, and reduce complexity
        Chain of Responsibility: when you want to avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it
        Command: when you want to parameterize objects with commands
        Interpreter: when you want to define a representation for a grammar of the given language, along with an interpreter that uses the representation to interpret sentences in the language
        Iterator: when you want to provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation
        Mediator: when you want to reduce coupling between classes that communicate with each other. Instead of classes communicating with each other, the classes will communicate with a mediator object
        Memento: when you want to capture and externalize an object's internal state so that the object can be restored to this state later, without violating encapsulation
        Observer: when you want to create a subscription model to notify multiple objects about any events that happen to the object they are observing
        State: when you want an object to alter its behavior when its internal state changes. The object will appear to change its class
        Strategy: when you want to define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it
        Template Method: when you want to define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure
        Visitor: when you want to define a new operation to a class without changing the class. You want to separate an algorithm from an object structure on which it operates
        
        
        BFS (breadth-first search): an algorithm that searches through all nodes connected to some starting node in a graph. Similar to DFS. Consider it like water spreading through a network of pipes - it will spread out all at once. Can find shortest paths in an unweighted graph.

Binary search: suppose you’re trying to find an element x in a sorted array. If x is less than the middle element, you know that x is in the first half of the array. Otherwise, x is in the second half. Repeat until you find x.

Brute force: trying all possibilities for the answer (for example, if you’re tasked with predicting who would win in a game, you could try iterating through every possible move sequence to find out whose win is forced).

Combinatorics: a subset of math that focuses on counting and techniques for counting (for example, counting the number of arrangements of people on a line where people of similar eye color must be together).

DFS (depth-first search): an algorithm that searches through all nodes connected to some starting node in a graph. Similar to BFS. Consider it like the path you would take while trying to find your way out of a maze (with the right-hand rule). Cannot find shortest paths in any form of graph.

Dijkstra: an algorithm that finds the shortest path from some start node to every other node in a graph. Works for both directed and undirected graphs, but not with negative-weight edges.

DSU (disjoint set union): a graph data structure that allows for fast insertion of edges and fast checking if two nodes are connected to each other.

Dynamic programming: a general problem solving mindset, where you eliminate useless information and use the answers for smaller versions of the task to build up to larger answers and eventually the full answer.

Fenwick/segment tree: two distinct data structures that work different ways but achieve a similar purpose: handling range queries quickly. For example, they can allow for quickly finding the sum of elements on some range [l, r] and quickly adding a value to any element.

Greedy: always making the immediately best decision, with no regard for how that decision will affect the future.

Hashmap: a data structure that uses hashing to map keys to values and allow for quick assignment (map[key] = value) and queries (get map[key]).

Hashset: a data structure that uses hashing to maintain a list of elements and: insert any element, ensure that no element is in the set more than once, and check if an element is in the set. Similar to ordered set, but doesn’t store its elements in sorted order.

Kruskal/Prim: two distinct algorithms that work different ways but achieve the same purpose: finding the minimum spanning tree.

MST (minimum spanning tree): a tree with the minimum possible sum of edge weights that spans (connects) the whole graph.

Ordered set: a data structure that uses a balanced binary search tree to maintain a list of elements and: insert any element, ensure that no element is in the set more than once, and check if an element is in the set. Similar to hashset, but stores its elements in sorted order.

Two pointers: suppose you’re trying to find two elements that sum to x in a sorted array. As you increase the value of the first element (sweeping right), the value of [x - first element] (aka the desired second element) will only decrease, meaning that you can rule out any candidate second elements that you’ve already checked (and sweep left).




// leetcode questions
// get a random leetcode question

Leetcode question 76: Minimum Window Substring 

which algorithm: sliding window
answer:
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = {};
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] === undefined) {
            map[t[i]] = 1;
        } else {
            map[t[i]]++;
        }
    }
    let count = Object.keys(map).length;
    let left = 0;
    let right = 0;
    let min = Infinity;
    let minLeft = 0;
    let minRight = 0;
    while (right < s.length) {
        if (map[s[right]] !== undefined) {
            map[s[right]]--;
            if (map[s[right]] === 0) {
                count--;
            }
        }
        while (count === 0) {
            if (right - left + 1 < min) {
                min = right - left + 1;
                minLeft = left;
                minRight = right;
            }
            if (map[s[left]] !== undefined) {
                map[s[left]]++;
                if (map[s[left]] > 0) {
                    count++;
                }
            }
            left++;
        }
        right++;
    }
    return min === Infinity ? "" : s.substring(minLeft, minRight + 1);
};
    
};

Leetocde # 89: Gray Code

which algorithm: backtracking
answer:
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let result = [];
    let visited = new Set();
    let backtrack = (current) => {
        if (visited.has(current)) {
            return;
        }
        visited.add(current);
        result.push(current);
        for (let i = 0; i < n; i++) {
            backtrack(current ^ (1 << i));
        }
    }
    backtrack(0);
    return result;
};

Leetcode # 90: Subsets II

which algorithm: backtracking
answer:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    let backtrack = (current, index) => {
        result.push(current);
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            backtrack(current.concat(nums[i]), i + 1);
        }
    }
    nums.sort((a, b) => a - b);
    backtrack([], 0);
    return result;
};

Leetcode # 91: Decode Ways


// answer full stack questions
// get a random full stack question

Full stack question 1: What is the difference between a relational database and a non-relational database?
Answer: Relational databases store data in tables, where each table has a fixed number of columns and each row is a record. Non-relational databases store data in collections, where each collection has a variable number of fields and each document is a record.

Full stack question 2: What is the difference between a SQL database and a NoSQL database?
Answer: SQL databases store data in tables, where each table has a fixed number of columns and each row is a record. NoSQL databases store data in collections, where each collection has a variable number of fields and each document is a record.

Full stack question 

li