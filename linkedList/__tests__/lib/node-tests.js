'use strict';

const Node = require('../../lib/node.js');

describe('Node Module', () => {

  it('This constuctor should be able to create a new Node module when there is one value passed through.', () => {
    let value = 'I am a string!!';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
    console.log(node);
  });

});