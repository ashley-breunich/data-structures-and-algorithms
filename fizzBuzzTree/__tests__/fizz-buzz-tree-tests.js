'use strict';

const Node = require('../node.js');
const BinaryTree = require('../fizz-buzz-tree.js');

describe('Node Module', () => {

  it('This constuctor should be able to create a new Node module when there is one value passed through.', () => {
    let val = 'I am a string!!';
    let node = new Node(val);
    expect(node.value).toEqual(val);
  });
});


describe('Fizz Buzz Tree', () => {

  it('Fizz Buzz function should properly replace values with Fizz, Buzz and FizzBuzz', () => {
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
  
    let tree = new BinaryTree(one);
    let fizzBuzz = tree.fizzBuzzTree();
    expect(fizzBuzz).toEqual([ 'Buzz', 'Fizz', 'Fizz', 'Fizz', 'FizzBuzz', 'FizzBuzz', 'Buzz' ]);
  }); 

  it('If there is a number not divisible by 3 or 5, it will keep the number present', () => {

    let one = new Node (5);
    let two = new Node (2);
    let three = new Node (15);
    let four = new Node (20);
    let five = new Node (22);
    let six = new Node (6);
    let seven = new Node (75);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;

    let tree = new BinaryTree(one);
    let fizzBuzz = tree.fizzBuzzTree();
    expect(fizzBuzz).toEqual(['Buzz', 22, 2, 'Fizz', 'FizzBuzz', 'FizzBuzz', 'Buzz']);
  }); 
});