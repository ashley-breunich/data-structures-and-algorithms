'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  
  fizzBuzzTree() {
    let results = [];

    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }

      if (node.value % 3 === 0 && node.value % 5 ===0) {
        node.value = 'FizzBuzz';
        results.push(node.value); 
      } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
        results.push(node.value); 
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
        results.push(node.value); 
      } else {
        results.push(node.value);
      }
    };

    _walk(this.root);
    return results;
  }
}
  
module.exports = BinaryTree;