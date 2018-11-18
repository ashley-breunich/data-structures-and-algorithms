'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
    
  add(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }
    
    const _add = node => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _add(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _add(node.right);
        }
      } else {
        return null;
      }
    };
    _add(node);
  }
}

module.exports = BinarySearchTree;
    
// let tree = new BinarySearchTree();
// let values = [9, 4, 17, 3, 6, 22, 5, 7, 20];
// values.map(val => tree.insert(val));