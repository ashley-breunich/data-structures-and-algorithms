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
  }
}

module.exports = Stack;