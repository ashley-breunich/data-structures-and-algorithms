'use strict';

let codeChallenge = module.exports = {};


codeChallenge.leftjoins = (hashmap1, hashmap2) => {
  console.log('hashmap1', hashmap1);
  console.log('hashmap2', hashmap2);
  let returnObj = {};
  var keyArr = Array.from(hashmap1.keys());
  // console.log('key array', keyArr);

  for(let i = 0; i < keyArr.length; i++) {
    let newKey = keyArr[i];
    // console.log('newKey', newKey);
    let leftVal = hashmap1[newKey];
    console.log('leftVal', leftVal);
    let rightVal = hashmap2[newKey];
    // ('rightVal', rightVal);
    returnObj[newKey] = [leftVal, rightVal];
  }
  return returnObj;
};
