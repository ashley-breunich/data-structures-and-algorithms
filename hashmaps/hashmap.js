'use strict';

const util = require('util');
const LL = require('./linked-list.js');

class Hashmap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
    // this.map = new Object(size);
  }

  hash(key) {
    let bigTotal = key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0);

    let idx = bigTotal % this.size;
    return idx;  
  }

  add(key, value) {
    let hash = this.hash(key);
    if(! this.map[hash] ) { this.map[hash] = new LL(); }
    this.map[hash].append({[key]:value});
    // console.log('hash', hash);
    // console.log('key', key);
    // console.log('value', value);
    return hash;
  }

  find(key) {
    // let hash = this.hash(key);
    // return 
  }

  contains(key) {
    let hash = this.hash(key);
    console.log('key', key);
    console.log('hash key', hash);
    if(this.map.includes(hash)) {
      return true;
    } else {
      return false;
    }
  }
}

let myhash = new Hashmap(20);

myhash.add('John','Boss');
myhash.add('Cathy','The Real Boss');
myhash.add('Zach','Kid 1');
myhash.add('Allie','Kid 2');
myhash.add('Rosie','Dog');
myhash.add('Cat','TA');
myhash.add('Justin','Student');
myhash.add('Jason','Student');
myhash.add('Ben','Student');
myhash.add('Timea','Student');
myhash.add('Jen','Student');
myhash.add('Khalil','Student');
myhash.add('Michael','Student');
myhash.add('Ovi','Student');

module.exports = Hashmap;