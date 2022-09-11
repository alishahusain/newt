// make a queue class
class Queue {
    constructor(items){
        this.items = items ? items : [];
    }
    enqueue(item) {
        this.items.push(item);
    }                                                            // add an item to the queue
    dequeue() {
        return this.items.shift();
    }                                                           // remove an item from the queue
    isEmpty() {
        return this.items.length === 0;
    }                                                           // check if the queue is empty
    length() {
        return this.items.length;
    }                                                           // get the length of the queue
    front() {
        return this.items[0];
    }                                                           // get the first item in the queue
    back() {
        return this.items[this.items.length - 1];
    }                                                           // get the last item in the queue
    clear() {
        this.items = [];
    }                                                           // clear the queue
    size() {
        return this.items.length;
    }                                                           // get the size of the queue
    print() {
        console.log(this.items.toString());
    }                                                           // print the queue
}

const _Queue = Queue;
export { _Queue as Queue };