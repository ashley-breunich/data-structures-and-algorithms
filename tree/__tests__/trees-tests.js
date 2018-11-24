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

describe('Node Module', () => {

  it('This constuctor should be able to create a new Node module when there is one value passed through.', () => {
    let val = 'I am a string!!';
    let node = new Node(val);
    expect(node.value).toEqual(val);
  });

});

describe('Binary Tree', () => {

  it('Can perform a preOrder traversal', () => {
    let preOrderTraversal = tree.preOrder();
    // console.log('preorder traversal', preOrderTraversal);
    expect(preOrderTraversal).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it('Can perform an inOrder traversal', () => {
    let inOrderTraversal = tree.inOrder();
    // console.log('inorder traversal', inOrderTraversal);
    expect(inOrderTraversal).toEqual([ 4, 2, 5, 1, 6, 3, 7 ]);
  });

  it('Can perform a postOrder traversal', () => {
    let postOrderTraversal = tree.postOrder();
    // console.log('postorder traversal', postOrderTraversal);
    expect(postOrderTraversal).toEqual([ 4, 5, 2, 6, 7, 3, 1 ]);
  });

  it('Can perform a breadthFirst traversal', () => {
    let BreadthFirstTraversal = tree.breadthFirst();
    expect(BreadthFirstTraversal).toEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
  });

  it('It can find that maximum value of a tree', () => {

    let one = new Node (33);
    let two = new Node (17);
    let three = new Node (301);
    let four = new Node (42);
    let five = new Node (15);
    let six = new Node (22);
    let seven = new Node (28);
    
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;
    
    let maxTree = new BinaryTree(one);

    let maxTreeValue = maxTree.findMaxValue();
    expect(maxTreeValue).toEqual(301);
  });
  
});


let searchTree = new BinarySearchTree();
searchTree.add(9);
searchTree.add(4);
searchTree.add(17);
searchTree.add(3);
searchTree.add(6);
searchTree.add(5);
searchTree.add(7);
searchTree.add(20);

// console.log('search tree', searchTree);

describe('Binary Search Tree', () => {

  it('The root will be the first value entered', () => {
    expect(searchTree.root.value).toEqual(9);
  });

  it('It can count the number of nodes in the tree', () => {
    expect(searchTree.length).toEqual(8);
  });

  //   it('Can add a new node to a binary search tree in the correct spot', () => {
  //     let addNode = searchTree.add(22);
  //     console.log('searchTree', searchTree);
  //     expect(addNode).toEqual([9, 4, 17, 3, 6, 22, 5, 7, 20]);
  //   });

  it('It can find a given node in a binary search tree', () => {
    let findNode = searchTree.search(17);
    expect(findNode.value).toEqual(17);
  });
    
});
