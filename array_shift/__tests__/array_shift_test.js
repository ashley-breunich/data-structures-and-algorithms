'use strict';

const code02 = require('../lib/array_shift.js');

let testArray = [1,2,3,5,6,7];
let testNumber = 4;

describe('code02.insertShiftArray()', () => {
  
  it('works when given one array value and one integer', () => {
    let message = code02.insertShiftArray([1,2,4,5], 3);
    console.log(message);
    expect(message).toEqual([1,2,3,4,5]);
  });

  it('the new array length should be one more than old array length', () => {
    let resultArray = code02.insertShiftArray(testArray, testNumber);
    let length = testArray.length;
    console.log(length);
    expect(resultArray).toHaveLength(length + 1);
  });

  it('does not allow booleans', () => {
    let message = code02.insertShiftArray(false);
    console.log(message);
    expect(message).toBeNull();
  });

  it('does not allow strings', () => {
    let message = code02.insertShiftArray('an array');
    console.log(message);
    expect(message).toBeNull();
  });

  it('array cannot be null', () => {
    let message = code02.insertShiftArray('', 8);
    console.log(message);
    expect(message).toBeNull();
  });

  it('number cannot be null', () => {
    let message = code02.insertShiftArray([1,7,10], '');
    console.log(message);
    expect(message).toBeNull();
  });

});