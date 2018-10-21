'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor () {
    this.head = null;
  }

  // This is like the push value
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this; 
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = node;
    return this;
  }

  prepend(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this; 
    }
    node.next = this.head;
    this.head = node; 
  }

  // insertBefore(3, 2)
  
  insertBefore(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    let previous;

    while(current.next) {
      if (current.value === value){
        // if it's the head
        if (current === this.head) {
          node.next = current;
          this.head = node;
          return this;
        }
        // if it's a middle value
        previous.next = node;
        node.next = current;
        return this;
      }
      previous = current;
      current = current.next;
    }
    // if it's the tail
    if (current.next === null) {
      previous.next = node;
      node.next = current;
    }
    return this;
  }

  insertAfter(value, newVal){
    let node = new Node(newVal);
    let current = this.head;

    while(current.next) {
      if(current.value === value) {
        node.next = current.next; // the next value of the new value equals the next value of the current value - making space for newVal
        current.next = node;
        return this;
      }
      current = current.next;
    }
    // if it's the tail
    if(current.next === null) {
      current.next = node;
      return this;
    }
  }

  length() {
    let length = 0;
    let current = this.head;
    while(current){
      current = current.next;
      length++;
    }
    return length;
  }
}

module.exports = LinkedList;