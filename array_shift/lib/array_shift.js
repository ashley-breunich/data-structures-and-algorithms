'use strict';

let codeChallenge = module.exports = {};

codeChallenge.insertShiftArray = (arr, number) => {
  let firstOne = arr;
  let newArray = [];
  let midIndex = Math.round(arr.length/2);
  if (typeof arr !== 'object'  || typeof number !== 'number' || arr === '' || number === '') {return null;}
  for (let i = 0; i < arr.length; i++) {  
    if(i < midIndex){
      newArray[i] = firstOne[i];
    } else {
      newArray[midIndex] = number;
      newArray[i+1] = firstOne[i];
    }
  }
  return newArray;
};
