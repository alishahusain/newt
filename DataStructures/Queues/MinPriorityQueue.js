import { PriorityQueue } from './PriorityQueue.js';
let minCompare = (parent, child) => parent-child; 
 // if it's an ascending priority queue the last element will have the highest number if the element number is greater than the last element number then we can just push it to the end of the queue
// make a new instance of the priority queue class but make a min priority queue
const minPriorityQueue = new PriorityQueue([], minCompare);
minPriorityQueue.enqueue('A', 1);
minPriorityQueue.enqueue('B', 2);
minPriorityQueue.enqueue('D', 3);
minPriorityQueue.enqueue('C', 4)
console.log(minPriorityQueue.items);

// Returns Default Priority Queue
/*
[
  { item: 'A', priority: 1 },
  { item: 'B', priority: 2 },
  { item: 'D', priority: 3 },
  { item: 'C', priority: 4 }
]
*/

const _MinPriorityQueue = minPriorityQueue;
export { _MinPriorityQueue as MinPriorityQueue };

