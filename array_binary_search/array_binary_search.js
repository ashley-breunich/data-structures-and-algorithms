'use strict';

let codeChallenge = module.exports = {};

codeChallenge.binarySearch = (arr, key) => {
  let min = 0;
  let max = arr.length - 1;
  if (typeof arr !== 'object'  || typeof key !== 'number' || arr === '' || key === '') {return null;}
  while (min <= max) {
    let midIndex = Math.floor((min + max)/2);
    let currentNum = arr[midIndex];
  
    if (currentNum === key) {
      return midIndex;
    } else if (currentNum > key) {
      max = midIndex -1;
    } else {
      min = midIndex +1;
    }
  }
  return -1;
};
  
// binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 40);