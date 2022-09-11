import {Queue} from './Queue.js';
class PriorityQueue extends Queue {
    constructor(items, compare) {
        super(items);
        this.compare = compare ? compare : (parent, child) => parent-child;
    }                   
    enqueue(item, priority) {                                                               // add an item to the queue
        priority = Math.max(Number(priority), 0);
        const element = {item:item, priority:priority};
                                                                                             // saves us from looping through the entire queue when the element has the lowest priority
        if(this.isEmpty() ) {
            this.items.push(element);
        } else if(this.compare(this.items[this.size()-1].priority, element.priority) < 0) {
            this.items.push(element);
        } else {
            for(let i=0; i<this.size(); i++) {
                if(this.compare( element.priority, this.items[i].priority ) < 0) {
                    this.items.splice(i, 0, element);
                    break;
                }
            }
        }
      return this.size;
    }
   
}
const _PriorityQueue = PriorityQueue;
export {_PriorityQueue as PriorityQueue};


