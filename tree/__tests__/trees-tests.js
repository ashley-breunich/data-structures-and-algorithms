'use strict';

const Node = require('../node.js');
const BinaryTree = require('../binary-tree.js');
const BinarySearchTree = require('../binary-search-tree.js');

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
let searchTree = new BinarySearchTree(new Node (40));
console.log('search tree', searchTree);
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
    // console.log('preorder traversal', preOrderTraversal);
    expect(preOrderTraversal).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it('inOrder()', () => {
    let inOrderTraversal = tree.inOrder();
    // console.log('inorder traversal', inOrderTraversal);
    expect(inOrderTraversal).toEqual([ 4, 2, 5, 1, 6, 3, 7 ]);
  });

  it('postOrder()', () => {
    let postOrderTraversal = tree.postOrder();
    // console.log('postorder traversal', postOrderTraversal);
    expect(postOrderTraversal).toEqual([ 4, 5, 2, 6, 7, 3, 1 ]);
  });

  it('levelOrder()', () => {
    let levelOrderTraversal = tree.levelOrder();
    console.log('levelorder traversal', levelOrderTraversal);
    expect(levelOrderTraversal).toEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
  });
  
});

// describe('Binary Search Tree', () => {

//   it('add()', () => {
//     let addBinary = searchTree.add(22);
//     console.log('add binary search tree', addBinary);
//     expect(addBinary).toEqual([1, 2, 4, 5, 3, 6, 7]);
//   });
    
// });