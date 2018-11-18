'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
    this.length = 0; 
  }


  add(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      this.length++;
      return;
    }
    
    const _add = node => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          this.length++;
          return;
        } else if (node.left !== null) {
          return _add(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          this.length++;
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
    

  search(value) {
    const _search = (rootNode, value) => {
      if (rootNode === null){
        return null;
      }

      if (value < rootNode.value) {
        return _search(rootNode.left, value);
      } else if (value > rootNode.value) {
        return _search(rootNode.right, value);
      } else {
        return rootNode;
      }
    };  
    return _search(this.root, value);
  } 
}

module.exports = BinarySearchTree;