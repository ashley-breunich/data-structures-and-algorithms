'use strict';

const codeChallenge = require('../repeated-word.js');

describe('Repeated Word', () => {

  it('it will return the first repeated word', () => {
    let string = 'Happy birthday to you, happy birthday to you';
    let message = codeChallenge.repeatedWord(string);
    expect(message).toEqual('happy');
  });
});