'use strict';

let codeChallenge = module.exports = {};


codeChallenge.multiBracketValidation = (input) => {
  let bracket = 0;
  let string = input;
  let splitString = string.split('');

  if (input === '') {
    return 'Please enter a string with characters';
  }

  for(let i = 0; i < splitString.length; i++) {
    if (splitString[i] === '[' || splitString[i] === '(' || splitString[i] === '{') {
      bracket++;
    }
    if (splitString[i] === ']' || splitString[i] === ')' || splitString[i] === '}') {
      bracket--;
    }
  }
  if (bracket === 0) {
    return true;
  } else {
    return false;
  }
};
