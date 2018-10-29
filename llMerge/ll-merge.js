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

  mergeLists(ll1,ll2) {
    if (ll1 == null) return ll2;
    if (ll2 == null) return ll1;

    let ll3 = new LinkedList();
    let current1 = ll1.head;
    let current2 = ll2.head;
    let node1 = new Node(current1.value);
    console.log('node1', node1);
    let node2 = new Node(current2.value);
    console.log('node2', node2);
    
    if (!ll3.head) {
      ll3.head = node1; 
    }
    
    while(current1 || current2) {

      if (current1 != null && current2 != null) {
        ll3.append(node1);
        current1 = current1.next;
        console.log('current1 next', current1);
        ll3.append(node2);
        current2 = current2.next;
        console.log('current2 next', current2);
      } else if (current1 == null) {
        ll3.append(node2);
        current2 = current2.next;
      } else {
        ll3.append(node1);
        current1 = current1.next;
      }
    }
    console.log('ll3 final', ll3);
  }
}

module.exports = LinkedList;