// make a Stack class
class Stack {
    constructor(items){
        this.items = items ? items : [];
    }
    push(item) {
        this.items.push(item);
    }                                                            // add an item to the stack
    pop() {
        return this.items.pop();
    }                                                           // remove an item from the stack
    isEmpty() {
        return this.items.length === 0;
    }                                                           // check if the stack is empty
    length() {
        return this.items.length;
    }                                                           // get the length of the stack
    peek() {
        return this.items[this.items.length - 1];
    }                                                           // get the last item in the stack
    clear() {
        this.items = [];
    }                                                           // clear the stack
    size() {
        return this.items.length;
    }                                                           // get the size of the stack
    print() {
        console.log(this.items.toString());
    }                                                           // print the stack
}
//in js 1 + "1"
const _Stack = Stack;
export { _Stack as Stack };



