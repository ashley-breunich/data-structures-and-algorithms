'use strict';

const codeChallenge = require('../repeated-word.js');

describe('Repeated Word', () => {

  it('it will return the first repeated word', () => {
    let string = 'This is a test sentence to check for a repeated word';
    let message = codeChallenge.repeatedWord(string);
    expect(message).toEqual('a');
  });


  it('if there is no repeated word, it will return a message to the user', () => {
    let string = 'This is a test sentence';
    let message = codeChallenge.repeatedWord(string);
    expect(message).toEqual('There are not repeated words.');
  });

});