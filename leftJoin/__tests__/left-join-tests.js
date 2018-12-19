'use strict';

const codeChallenge = require('../left-join.js');

let myMap1 = new Map();
myMap1.set('fond', 'enamored');
myMap1.set('wrath', 'anger');
myMap1.set('diligent', 'employed');
myMap1.set('outfit', 'garb');
myMap1.set('guide', 'usher');

let myMap2 = new Map();
myMap2.set('fond', 'averse');
myMap2.set('wrath', 'delight');
myMap2.set('diligent', 'idle');
myMap2.set('guide', 'follow');
myMap2.set('flow', 'jam');

describe('Left Join', () => {

  it('it will left join two hashmaps', () => {
    let message = codeChallenge.leftjoins(myMap1, myMap2);
    expect(message).toEqual('a');
  });

});