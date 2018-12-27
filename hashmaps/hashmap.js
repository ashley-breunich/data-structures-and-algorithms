'use strict';

const util = require('util');
const LL = require('./linked-list.js');

class Hashmap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let bigTotal = key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0);

    let idx = bigTotal % this.size;
    return idx;  
  }

  set(key, value) {
    let hash = this.hash(key);
    if(! this.map[hash] ) { this.map[hash] = new LL(); }
    this.map[hash].append({[key]:value});
  }

  has(key) {
    let hash = this.hash(key);
    console.log('key', key);
    if(this.map.includes(key)) {
      return true;
    } else {
      return false;
    }
  }

  find(key) {
    // returns value
  }

  update(key,value) {
    // find, delete, add
  }

}

let myhash = new Hashmap(20);

myhash.set('John','Boss');
myhash.set('Cathy','The Real Boss');
myhash.set('Zach','Kid 1');
myhash.set('Allie','Kid 2');
myhash.set('Rosie','Dog');
myhash.set('Cat','TA');
myhash.set('Justin','Student');
myhash.set('Jason','Student');
myhash.set('Ben','Student');
myhash.set('Timea','Student');
myhash.set('Jen','Student');
myhash.set('Khalil','Student');
myhash.set('Michael','Student');
myhash.set('Ovi','Student');

module.exports = Hashmap;