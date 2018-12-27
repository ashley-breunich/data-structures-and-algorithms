'use strict';

const util = require('util');
let Hashmap = require('../hashmap.js');
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

console.log('full hashmap', util.inspect(myhash,{showHidden:false,depth:null}));

describe('Hashmap Data Structure', () => {
  it('If it finds a specific key, it will return true', ()=> {
    let keyTest = myhash.has('Cat');
    console.log('keytest', keyTest);
    expect(keyTest).toEqual(true);
  });
});