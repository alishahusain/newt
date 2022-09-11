import { PriorityQueue } from './PriorityQueue.js';
// if it's a descending priority queue the last element will have the lowest number if the element number is less than the last element number then we can just push it to the end of the queue
// make a new instance of the priority queue class but make a max priority queue
let maxCompare = (parent, child) => child-parent; 
const MaxPriorityQueue = new PriorityQueue([], maxCompare);

/*
maxPriorityQueue.enqueue('A', 1);
maxPriorityQueue.enqueue('B', 2);
maxPriorityQueue.enqueue('D', 3);
maxPriorityQueue.enqueue('C', 4)
console.log(maxPriorityQueue.items);
*/
// Returns Reverse Priority Queue
/* 
[
  { item: 'C', priority: 4 },
  { item: 'D', priority: 3 },
  { item: 'B', priority: 2 },
  { item: 'A', priority: 1 }
]
*/

const _MaxPriorityQueue = MaxPriorityQueue;
export { _MaxPriorityQueue as MaxPriorityQueue };