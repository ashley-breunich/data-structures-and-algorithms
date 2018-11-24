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

  breadthFirst() {
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

  findMaxValue() {
    let maxValue = 0;
    let _walk = node => {
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      if (node.value > maxValue) {
        maxValue = node.value;
      }
    };
    _walk(this.root);
    return maxValue;
  }
}

module.exports = BinaryTree;