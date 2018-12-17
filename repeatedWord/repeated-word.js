'use strict';

let codeChallenge = module.exports = {};


codeChallenge.repeatedWord = (string) => {
  let lowercase = string.toLowerCase();
  let splitString = lowercase.split(' ');
  for (let i = 0; i < splitString.length-1; i++) {
    let word = splitString[i];
    for(let j=i+1; j<splitString.length; j++) {
      if (word === splitString[j]) {
        return word;
      }
    }
  }
  return 'There are not repeated words.';
};
