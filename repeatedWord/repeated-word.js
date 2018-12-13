'use strict';

let codeChallenge = module.exports = {};


codeChallenge.repeatedWord = (string) => {
  let lowercase = string.toLowerCase();
  let splitString = lowercase.split(' ');
  console.log(splitString);
  for (let i = 0; i < splitString.length-1; i++) {
    console.log('i', i);
    let word = splitString[i];
    console.log('word', word);
    for(let j=i+1; i<splitString.length; j++) {
      console.log('splitStringj', splitString[j]);
      if (word === splitString[j]) {
        return word;
      }
    }
  }
};
