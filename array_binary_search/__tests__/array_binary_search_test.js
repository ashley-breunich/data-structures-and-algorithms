'use strict';

const code03 = require('../array_binary_search.js');

let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let testNumber = 4;

describe('code03.binarySearch()', () => {
  
  it('works when given one array value and one integer', () => {
    let message = code03.binarySearch(testArray, testNumber);
    console.log(message);
    expect(message).toEqual(3);
  });

  it('The first input is an array; the second input is a number', () => {
    let message = code03.binarySearch([], 1);
    console.log(message);
    expect(message).toBeTruthy;
  });

  it('does not allow booleans', () => {
    let message = code03.binarySearch(false);
    console.log(message);
    expect(message).toBeNull();
  });

  it('does not allow strings', () => {
    let message = code03.binarySearch('an array');
    console.log(message);
    expect(message).toBeNull();
  });

  it('array cannot be null', () => {
    let message = code03.binarySearch('', 8);
    console.log(message);
    expect(message).toBeNull();
  });

  it('number cannot be null', () => {
    let message = code03.binarySearch([1,7,10], '');
    console.log(message);
    expect(message).toBeNull();
  });

});