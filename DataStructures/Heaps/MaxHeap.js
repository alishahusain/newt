import { Heap } from "./Heap.js";
let maxCompare = (parent, child) => parent > child ? -1 : 1; // return negative value to indicate that a change does not need to be made 
const maxHeap = new Heap(maxCompare);
/*
maxHeap.insert(5);
maxHeap.insert(6);
maxHeap.insert(7);
maxHeap.insert(8);
maxHeap.insert(4);
maxHeap.insert(3);
console.log(maxHeap.leaf); 
console.log(maxHeap.root());
console.log(maxHeap.draw());
console.log(maxHeap.hasLeftChild(1)); 
console.log(maxHeap.hasRightChild(1));
console.log(maxHeap.compareAt(1, 2)); // 1 is the parent index and 2 is the child index
//console.log(maxHeap.swap(1, 2)); // swap doesn't return anything shouldnt be called except for within the heapifyUp and heapifyDown methods
//console.log(maxHeap.shouldSwap(1, 2)); // used in heapifyUp and heapifyDown*
console.log(maxHeap.insert(9)); // insert a new node
console.log(maxHeap.nodes) 
console.log(maxHeap.insert(10)); 
console.log(maxHeap.nodes)
console.log(maxHeap.extractRoot()); 
console.log(maxHeap.pop()); 
console.log(maxHeap.nodes); 
console.log(maxHeap.compare) 
console.log(maxHeap.nodes); 
console.log(maxHeap.draw()); // draw a picture of the maxHeap
*/
const _maxHeap = maxHeap;
export { _maxHeap as maxHeap };