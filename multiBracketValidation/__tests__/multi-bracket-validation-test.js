'use strict';

const validation = require('../multi-bracket-validation.js');

describe('Multi Bracket Validation', () => {
  
  it('it will return true if the brackets are balanced.', () => {
    let input = '({[]})';
    let message = validation.multiBracketValidation(input);
    expect(message).toEqual(true);
  });

  it('it will return false if the brackets are NOT balanced.', () => {
    let input = '{[]})';
    let message = validation.multiBracketValidation(input);
    expect(message).toEqual(false);
  });

  it('it will work if there are other integers present in the input string.', () => {
    let input = '{[hello]}';
    let message = validation.multiBracketValidation(input);
    expect(message).toEqual(true);
  });

  it('If there is not input, it will ask the user to enter a string with content', () => {
    let input = '';
    let message = validation.multiBracketValidation(input);
    expect(message).toEqual('Please enter a string with characters');
  });

});