'use strict';

const Node = require('../node.js');
const BinaryTree = require('../binary-tree.js');
const Intersection = require('../tree-intersection');

let one = new Node (5);
let two = new Node (3);
let three = new Node (15);
let four = new Node (20);
let five = new Node (9);
let six = new Node (6);
let seven = new Node (75);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

let tree1 = new BinaryTree(one);

let one2 = new Node (11);
let two2 = new Node (3);
let three2 = new Node (14);
let four2 = new Node (19);
let five2 = new Node (9);
let six2 = new Node (7);
let seven2 = new Node (75);

one.left = two2;
one.right = three2;
two.left = four2;
two.right = five2;
three.left = six2;
three.right = seven2;

let tree2 = new BinaryTree(one2);

describe('Node Module', () => {

  it('This constuctor should be able to create a new Node module when there is one value passed through.', () => {
    let val = 'I am a string!!';
    let node = new Node(val);
    expect(node.value).toEqual(val);
  });
});

// describe('Fizz Buzz Tree', () => {

//   it('Fizz Buzz function should properly replace values with Fizz, Buzz and FizzBuzz', () => {
//     let tree1constructed = tree1.Intersection();
//     console.log('tree1constructed', tree1constructed);
//     // expect(tree1constructed).toEqual([ 'Buzz', 'Fizz', 'Fizz', 'Fizz', 'FizzBuzz', 'FizzBuzz', 'Buzz' ]);
//   }); 

// });