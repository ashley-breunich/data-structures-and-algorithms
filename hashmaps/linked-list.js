'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traversal() {
        
    let values = [];
        
    if(!this.head) {
      return 'There is no linked list';
    }

    let current = this.head;

    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this; 
    }
    
    let current = this.head;
    while(current.next) {
      current = current.next;
      this.length++;
    }
    
    current.next = node;
    this.tail = node;
    return this;
  }

  prepend(value) {
    let node = new Node(value);
    node.next =this.head;
    this.length++;
    this.head = node;
  }

  deleteFromEnd() {
    let current = this.head;
    let previous = null;
    let lastValue = null;

    if(!this.head) {
      return 'This linked list is empty';
    }

    while(current.next) {
      previous = current;
      current = current.next;
    }

    current = previous;
    lastValue = current.next;
    current.next = null;
    this.tail = current;
    this.length--;
    return lastValue;
  }

  getLastValue() {
    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    return current;
  }
}

module.exports = LinkedList; 