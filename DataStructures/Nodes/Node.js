class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority ? priority : null;
    }
  }

const _Node = Node;
export { _Node as Node };