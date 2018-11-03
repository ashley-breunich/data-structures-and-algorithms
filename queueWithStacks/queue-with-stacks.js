'use strict';

const Stack = require('./stacks.js');

class PseudoQueue {
  constructor () {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    return this;
  }

  dequeue() {
    if (this.stack2 === null) {
      if (this.stack1 === null) { return 'empty queue. Cannot dequeue'; }
      while (this.stack1.storage.length > 0) {
        let tempValue = this.stack1.pop();
        this.stack2.push(tempValue);
      }
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;