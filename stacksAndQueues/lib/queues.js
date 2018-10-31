'use strict';

const LL = require('./linked-list.js');
const Node = require('./node.js');

class Queue {
  constructor () {
    this.front = null;
    this.storage = new LL();
  }
  
  enqueue (value) {
    this.storage.prepend(value);
    this.front = new Node(value);
    return this;
  }
}
  
module.exports = Queue;