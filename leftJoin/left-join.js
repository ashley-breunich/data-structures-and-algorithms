'use strict';

let codeChallenge = module.exports = {};

codeChallenge.leftjoins = (hashmap1, hashmap2) => {
  let returnObj = {};
  var keyArr = Array.from(hashmap1.keys());

  for(let i = 0; i < keyArr.length; i++) {
    let newKey = keyArr[i];
    let leftVal = hashmap1.get(newKey);
    let rightVal = hashmap2.get(newKey);
    if (rightVal === undefined) {
      rightVal = null;
    }
    returnObj[newKey] = [leftVal, rightVal];
  }
  return returnObj;
};
