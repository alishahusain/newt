import { Heap } from "./Heap.js";

let minCompare = (parent, child) => parent < child ? -1 : 1; // return negative value to indicate that a change does not need to be made 
const minHeap = new Heap(minCompare);
/*

minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(7);
minHeap.insert(8);
minHeap.insert(4);
minHeap.insert(3);
console.log(minHeap.leaf); // leaf: 8
console.log(minHeap.root()); // 5
console.log(minHeap.draw());
console.log(minHeap.hasLeftChild(1)); // true index 1 has a left child
console.log(minHeap.hasRightChild(1)); // true index 1 has a right child
console.log(minHeap.compareAt(1, 2)); // 1 is the parent index and 2 is the child index
//console.log(minHeap.swap(1, 2)); // swap doesn't return anything shouldnt be called except for within the heapifyUp and heapifyDown methods
//console.log(minHeap.shouldSwap(1, 2)); // used in heapifyUp and heapifyDown*
console.log(minHeap.insert(9)); // insert a new node
console.log(minHeap.nodes) // [ 5, 6, 7, 8, 9 ]
console.log(minHeap.insert(10)); 
console.log(minHeap.nodes)
console.log(minHeap.extractRoot()); // removed 5 from the min heap
console.log(minHeap.pop()); // removed 6 from the min heap
console.log(minHeap.nodes); // [ 6, 7, 8, 9 ] 5 was removed

// console all of the methods to check if they work
console.log(minHeap.compare) // [Function: minCompare]
console.log(minHeap.nodes); //  nodes: [ 3, 4, 5, 8, 6, 7 ]
console.log(minHeap.draw()); // draw a picture of the minHeap*/

const _minHeap = minHeap;
export { _minHeap as minHeap };