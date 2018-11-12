'use strict';

const Node = require('./lib/node.js');

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

  mergeLists(ll1,ll2) {
    if (ll1 == null) return ll2;
    if (ll2 == null) return ll1;

    let ll3 = new LinkedList();
    let current1 = ll1.head;
    let current2 = ll2.head;

    while(current1 || current2) {
      ll3.append(current1.value);
      current1 = current1.next;
      ll3.append(current2.value);
      current2 = current2.next;
    } 
    
    return ll3;
  }
}

module.exports = LinkedList;