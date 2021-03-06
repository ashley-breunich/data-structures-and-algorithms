'use strict';

const util = require('util');
let Hashmap = require('../hashmap.js');
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

console.log('full hashmap', util.inspect(myhash,{showHidden:false,depth:null}));

describe('Hashmap Data Structure', () => {
  it('able to add a key/value pair to the hashtable', ()=> {
    let addTest = myhash.add('Ashley','Designer');
    // This is testing what the hash # is - that it returns the accurate spot
    expect(addTest).toEqual(14);
  });

  it('able to return the value when given a key', ()=> {
    let findTest = myhash.find('Jen');
    expect(findTest).toEqual('Student');
  });

  it('will let you know if there is not a matching key/value pair', ()=> {
    let findTest = myhash.find('Tucker');
    expect(findTest).toEqual('There is no value matching the current given key.');
  });

  it('If it finds a specific key, it will return true', ()=> {
    let containsTest = myhash.contains('Cat');
    expect(containsTest).toEqual(true);
  });

  it('If it finds that a specific key does not exist in the map, it will return false', ()=> {
    let containsTest = myhash.contains('Kaitlyn');
    expect(containsTest).toEqual(false);
  });

  it('When given a key, it will return the index in the array the key is stored', ()=> {
    let getHashTest = myhash.getHash('Ben');
    expect(getHashTest).toEqual(17);
  });

  it('When given a key that does not exist in the hashmap, it will return an message saying there is no matching key in the map', ()=> {
    let getHashTest = myhash.getHash('Ponyo');
    expect(getHashTest).toEqual('There is no matching key in the map');
  });

});