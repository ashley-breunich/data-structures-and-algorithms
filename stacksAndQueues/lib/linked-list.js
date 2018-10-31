'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor () {
    this.head = null;
    this.tail = null;
  }

  // This is like the push value
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this; 
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = node;
    this.tail = node;
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

  deleteFromEnd() {    
    let current = this.head;
    let previous = null;
    while(current.next) {
      previous = current;
      current = current.next;
    }
    current = previous;
    current.next = null;
    this.tail = previous;
    console.log('THIS.TAIL',this.tail);
    return current;
  }

  // insertBefore
  insertBefore(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    let previous;

    while(current.next) {
      if (current.value === value){
        if (current === this.head) {
          node.next = current;
          this.head = node;
          return this;
        }
        previous.next = node;
        node.next = current;
        return this;
      }
      previous = current;
      current = current.next;
    }
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
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    if(current.next === null) {
      current.next = node;
      return this;
    }
  }

  reverse() {
    let current = this.head;
    let next = null;
    let previous = null;
  
    while(current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
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