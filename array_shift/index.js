'use strict';

// Pull in our 'hello' module
const mainTest = require('./lib/array_shift.js');

// Do something simple using its interface
console.log(mainTest.insertShiftArray([1,2,3,5,6,7], 4)); //[1,2,3,4,5,6,7]