'use strict';

const LL = require('./linked-list.js');
const Node = require('./node.js');

class Stack {
  constructor () {
    this.top = null;
    this.storage = new LL();
  }

  push(value) {
    this.storage.append(value);
    this.top = new Node(value);
    return this;
  }

  pop() {
    let poppedItem = this.storage.deleteFromEnd();
    this.top = this.storage.tail;
    return poppedItem;
  }

  peek() {
    let lastItem = this.storage.getLastValue();
    return lastItem;
  }
}

module.exports = Stack;