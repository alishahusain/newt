 class Heap {
  constructor(compare, nodes, leaf) {
    if (typeof compare !== 'function') {
      throw new Error('Heap constructor expects a compare function');
    }
    this.compare = compare;
    this.nodes = Array.isArray(nodes) ? nodes : [];
    this.leaf = leaf || null;                           // leaf is the last node in the heap lowest priority
  }

  hasLeftChild(parentIndex) {
    const leftChildIndex = (parentIndex * 2) + 1;
    return leftChildIndex < this.size();
  }                                                     //checks if the parent has a left child

  hasRightChild(parentIndex) {
    const rightChildIndex = (parentIndex * 2) + 2;
    return rightChildIndex < this.size();
  }                                                     //checks if the parent has a right child
  compareAt(i, j) {
    return this.compare(this.nodes[i], this.nodes[j]);
  }                                                     //compares two nodes       
  swap(i, j) {
    const temp = this.nodes[i];
    this.nodes[i] = this.nodes[j];
    this.nodes[j] = temp;
  }                                                     //swaps two nodes
  shouldSwap(parentIndex, childIndex) {

    if (parentIndex < 0 || parentIndex >= this.size()) {
      return false;
    }

    if (childIndex < 0 || childIndex >= this.size()) {
      return false;
    }
    // if max swap if parent is NOT greater than child
    // if min swap if child is NOT greater than parent
    return this.compareAt(parentIndex, childIndex) > 0;
  }                                                     //checks if the parent and child should be swapped  
  compareChildrenOf(parentIndex) {
    if (!this.hasLeftChild(parentIndex) && !this.hasRightChild(parentIndex)) {
      return -1;
    }

    const leftChildIndex = (parentIndex * 2) + 1;
    const rightChildIndex = (parentIndex * 2) + 2;

    if (!this.hasLeftChild(parentIndex)) return rightChildIndex;
    if (!this.hasRightChild(parentIndex)) return leftChildIndex;

    const compare = this.compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }                                                     //compares the children of a parent
  compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const compare = this.compareAt(rightChildIndex, leftChildIndex);
    if (compare <= 0 && rightChildIndex < index) {
      return rightChildIndex;
    }
    return leftChildIndex;
  }                                                     //compares two children before a position
  heapifyUp(startIndex) {
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }                                                     //bubbles up a node if it's in a wrong position
  heapifyDown(startIndex) {
    let parentIndex = startIndex;
    let childIndex = this.compareChildrenOf(parentIndex);

    while (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this.compareChildrenOf(parentIndex);
    }
  }                                                         //bubbles down a node if it's in a wrong position

  heapifyDownUntil(index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;

    while (leftChildIndex < index) {
      childIndex = this.compareChildrenBefore(
        index,
        leftChildIndex,
        rightChildIndex
      );

      if (this.shouldSwap(parentIndex, childIndex)) {
        this.swap(parentIndex, childIndex);
      }

      parentIndex = childIndex;
      leftChildIndex = (parentIndex * 2) + 1;
      rightChildIndex = (parentIndex * 2) + 2;
    }
  }                                                         //bubbles down a node before a given index

  insert(node) {
    this.nodes.push(node);
    this.heapifyUp(this.size() - 1);
    if (this.leaf === null || this.compare(node, this.leaf) > 0) {
      this.leaf = node;
    }
    return this;
  }                                                         //inserts a new node into the heap
  push(node) {
    return this.insert(node);
  }                                                         //inserts a new node into the heap
  extractRoot() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.root();
    this.nodes[0] = this.nodes[this.size() - 1];
    this.nodes.pop();
    this.heapifyDown(0);

    if (root === this.leaf) {
      this.leaf = this.root();
    }

    return root;
  }                                                         //removes and extracts the root node from the heap
  pop() {
    return this.extractRoot();
  }                                                         //removes and extracts the root node from the heap
  sort() {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this.swap(0, i);
      this.heapifyDownUntil(i);
    }
    return this.nodes;
  }                                                         // applies heap sort and return the nodes sorted by priority
  fix() {
    for (let i = 0; i < this.size(); i += 1) {
      this.heapifyUp(i);
    }
    return this;
  }                                                         // fixes node positions in the heap
  isValid() {
    const isValidRecursive = (parentIndex) => {
      let isValidLeft = true;
      let isValidRight = true;

      if (this.hasLeftChild(parentIndex)) {
        const leftChildIndex = (parentIndex * 2) + 1;
        if (this.compareAt(parentIndex, leftChildIndex) > 0) {
          return false;
        }
        isValidLeft = isValidRecursive(leftChildIndex);
      }

      if (this.hasRightChild(parentIndex)) {
        const rightChildIndex = (parentIndex * 2) + 2;
        if (this.compareAt(parentIndex, rightChildIndex) > 0) {
          return false;
        }
        isValidRight = isValidRecursive(rightChildIndex);
      }

      return isValidLeft && isValidRight;
    };

    return isValidRecursive(0);
  }                                                         // verifies that all nodes are in the right position
  clone() {
    return new Heap(this.compare, this.nodes.slice(), this.leaf);
  }                                                         // returns a shallow copy of the heap
  root() {
    if (this.isEmpty()) {
      return null;
    }

    return this.nodes[0];
  }                                                         //returns the root node in the heap
  top() {
    return this.root();
  }                                                         //returns the root node in the heap
  leaf() {
    return this.leaf;
  }                                                         //returns a leaf node in the heap
  size() {
    return this.nodes.length;
  }                                                         //returns the number of nodes in the heap
  isEmpty() {
    return this.size() === 0;
  }                                                         //checks if the heap is empty
  clear() {
    this.nodes = [];
    this.leaf = null;
  }                                                         //clears the heap                           
  draw() {
    let str = '';
    let count = 0;
    let max = 1;
    let level = 0;
    for (let i = 0; i < this.size(); i += 1) {
      if (count === max) {
        str += '\n';
        level += 1;
        count = 0;
        max *= 2;
      }
      str += `${this.nodes[i]} `;
      count += 1;
    }
    return str;
  }                                                         //draws the heap for debugging purposes
  static heapify(nodes, compare) {
    if (!Array.isArray(nodes)) {
      throw new Error('Heap.heapify expects an array of nodes');
    }

    if (typeof compare !== 'function') {
      throw new Error('Heap.heapify expects a compare function');
    }

    return new Heap(compare, nodes).fix();
  }                                                         //builds a heap from an array of nodes
  static isHeapified(nodes, compare) {
    return new Heap(compare, nodes).isValid();
  }                                                          //checks if an array of nodes is a valid heap       
}
const _Heap = Heap;
export { _Heap as Heap };