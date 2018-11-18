'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Root - Left - Right
  preOrder() {
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }

  // Left - Root - Right
  inOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }

      results.push(node.value);

      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }

  // Left - Right - Root
  postOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }

  levelOrder() {
    let results = [];
    let nodeQueue = [];
  
    nodeQueue.push(this.root);
  
    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if (current.left) {
        nodeQueue.push(current.left);
      }
      if (current.right) {
        nodeQueue.push(current.right);
      }
    }
    return results;
  }
}

module.exports = BinaryTree;

// let tree = new BinaryTree();
// let values = [9, 4, 17, 3, 6, 22, 5, 7, 20];
// values.map(val => tree.insert(val));