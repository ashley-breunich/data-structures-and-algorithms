'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    if (!this.head) {
      this.head = node;
      this.length++;
      return this; 
    }
    node.next = this.head;
    this.length++;
    this.head = node; 
  }

  find(value) {
    let current = this.head;

    while(current.next) {
      if (current.value === value) {
        return current.value;
      } else {
        current = current.next;
      }
    }
    return 'There is no match';
  }

  deleteFromEnd() {    
    let current = this.head;
    let previous = null;

    if (!this.head) {
      return 'This Linked List is empty';
    }

    while(current.next) {
      previous = current;
      current = current.next;
    }
    current = previous;
    current.next = null;
    this.tail = previous;
    this.length--;
    return current;
  }

  deleteFromFront() {
    if (!this.head) {
      return 'This Linked List is empty';
    }
    let previous = this.head;
    this.head = this.head.next;
    this.length--;
    return previous;
  }

  getLastValue() {
    let current = this.head;
    
    while(current.next) {
      current = current.next;
    }
    return current;
  }

  getFirstValue() {
    if (!this.head) {
      return 'This Linked List is empty';
    }
    
    return this.head;
  }

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

    if (this.head === null) {
      console.log('head is null so the length is 0');
      return length;
    }

    while(current !== null){
      length++;
      // console.log('length', length);
      current = current.next;
      // console.log('current', current);
    }
    return length;
  }
}

module.exports = LinkedList;