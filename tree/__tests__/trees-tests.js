'use strict';

const Node = require('../node.js');
const BinaryTree = require('../binary-tree.js');
// const BinarySearchTree = require('../binary-search-tree.js');

let one = new Node (1);
let two = new Node (2);
let three = new Node (3);
let four = new Node (4);
let five = new Node (5);
let six = new Node (6);
let seven = new Node (7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

let tree = new BinaryTree(one);

// console.log('tree', tree);

describe('Node Module', () => {

  it('This constuctor should be able to create a new Node module when there is one value passed through.', () => {
    let val = 'I am a string!!';
    let node = new Node(val);
    expect(node.value).toEqual(val);
  });

});

describe('Binary Tree', () => {

  it('preOrder()', () => {
    let preOrderTraversal = tree.preOrder();
    console.log('preorder traversal', preOrderTraversal);
    // expect(node.value).toEqual(val);
  });
  
});