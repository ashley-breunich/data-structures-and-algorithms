'use strict';

function reverseArray (arr) {
    let reversed = [];
      for (i = 0; i <= arr.length-1; i++) {
          let x = (arr.length-1) - i;
          reversed.push(arr[x].valueOf());
      }
      return reversed;
  }
  
  reverseArray([12, 7, 9, 1, 5, 10, 45])