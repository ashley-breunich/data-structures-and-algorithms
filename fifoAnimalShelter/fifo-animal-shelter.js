'use strict';

const queue = require('./queues.js');

class AnimalShelter {
  constructor () {
    this.shelterQueue = new queue();
  }
  
  enqueue(animal) {
    this.shelterQueue.enqueue(animal);
  }
  
  dequeue(pref) {
    console.log('ENQUEUE TEST', this.shelterQueue.storage);
    if (pref === 'cat') {
      let current = this.shelterQueue.storage.head;
      while(current.next) {
        if (current.value === 'cat') {
          return current.value;
        } else {
          current = current.next;
        }
      }
      return 'There are no more cats available. Would you like a dog instead?';
    } 

    if (pref === 'dog') {
      let current = this.shelterQueue.storage.head;
      while(current.next) {
        if (current.value === 'dog') {
          return current.value;
        } else {
          current = current.next;
        }
      }
      return 'There are no more dogs available. Would you like a cat instead?';
    }

    if (pref !== 'dog' || pref !== 'cat') {
      this.shelterQueue.dequeue();
    }

  }
}
  
module.exports = { AnimalShelter };