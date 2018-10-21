function reverseArray (arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed[i] = arr[arr.length - (i+1)];
  }
  return reversed;
}

reverseArray([12, 7, 9, 1, 5, 10, 45]);

// function reverseArray (arr) {
//   let reversed = [];
//   for (let i = 0; i < arr.length; i++) {
//     reversed[i] = arr[arr.length - (i+1)];
//   }
//   return reversed;
// }

// reverseArray([12, 7, 9, 1, 5, 10, 45]);