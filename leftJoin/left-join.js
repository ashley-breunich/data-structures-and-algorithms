'use strict';

let codeChallenge = module.exports = {};


codeChallenge.leftjoins = (hashmap1, hashmap2) => {
  console.log('hashmap1', hashmap1);
  console.log('hashmap2', hashmap2);
  let returnObj = {};
  let keyArr = hashmap1.keys();

  for(let i = 0; i < keyArr.length; i++) {
    let newKey = keyArr[i];
    let leftVal = hashmap1[newKey];
    let rightVal = hashmap2[newKey];
    returnObj[newKey] = [leftVal, rightVal];
  }
  return returnObj;
};
