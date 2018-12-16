'use strict';

const BinaryTree = require('./binary-tree.js');

let codeChallenge = module.exports = {};
  
codeChallenge.tree_intersection = (tree1, tree2) => {
  let tree1order = tree1.preOrder();
  console.log(tree1order);
};