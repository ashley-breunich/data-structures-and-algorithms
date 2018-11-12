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

  kthFromEnd(k) {
    
    console.log('value of k:', k);
    let length = 0;
    let current = this.head;
    let arr = [];
    
    while(current){
      arr.push(current.value);
      current = current.next;
      length++;
    }
    
    console.log('length:', length); 
    console.log('arr:', arr);  
    let newIndex = (length - 1) - k;
    console.log('new index:', newIndex);
    console.log('correct answer:', arr[newIndex]);
    return arr[newIndex];
  }

  // mergeLists(ll1,ll2) {
  //   if (ll1 == null) return ll2;
  //   if (ll2 == null) return ll1;

  //   let ll3 = new LinkedList();
  //   let current1 = ll1.head;
  //   let current2 = ll2.head;
  //   let node1 = new Node(current1.value);
  //   console.log('node1', node1);
  //   let node2 = new Node(current2.value);
  //   console.log('node2', node2);

  //   while(current1 || current2) {
  //     if (current1 != null && current2 != null) {
  //       ll3.append(node1);
  //       current1 = current1.next;
  //       console.log('current1 next', current1);
  //       ll3.append(node2);
  //       current2 = current2.next;
  //       console.log('current2 next', current2);
  //     } else if (current1 == null) {
  //       ll3.append(node2);
  //       current2 = current2.next;
  //     } else {
  //       ll3.append(node1);
  //       current1 = current1.next;
  //     }
  //   }
  // }

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