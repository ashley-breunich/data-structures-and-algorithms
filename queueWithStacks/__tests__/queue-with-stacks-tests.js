'use strict';

let Stacks = require('../stacks.js');
let QueueWithStacks = require('../queue-with-stacks.js');

describe('Stacks', () => {
  xit('Stack Constructor will be null', ()=> {
    let stack = new Stacks();
    expect(stack.top).toBeNull();
  });
});

describe('Push', () => {
  xit('The stacks push() function will add a new item to the top of the stack', ()=> {
    let stack = new Stacks();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    stack.push(2);  
    expect(stack.top.value).toBe(2);
    stack.push(3);  
    expect(stack.top.value).toBe(3);  
    stack.push(4); 
    expect(stack.top.value).toBe(4);
    console.log(stack);
  });
});
  
describe('Pop', () => {
  xit('The stacks pop() function will remove the top value from a stack', ()=> {
    let stack = new Stacks();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    stack.push(2);  
    expect(stack.top.value).toBe(2);
    stack.push(3);  
    expect(stack.top.value).toBe(3);  
    stack.push(4); 
    expect(stack.top.value).toBe(4);
    stack.pop();
    expect(stack.top.value).toBe(3);
  });
});
  
describe('Peek - Stacks', () => {
  xit('The stacks peek() function will return the top value', ()=> {
    let stack = new Stacks();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    stack.push(2);  
    expect(stack.top.value).toBe(2);
    stack.push(3);  
    expect(stack.top.value).toBe(3);  
    stack.push(4); 
    expect(stack.top.value).toBe(4);
    let stackpeek = stack.peek();
    expect(stackpeek.value).toBe(4);
  });
});
  
describe('Queue with Stacks', () => {
  xit('pseudoQueue Constructor will be null', ()=> {
    let queue = new QueueWithStacks();
    expect(queue.front).toBeNull();
  });
});

describe('Enqueue', () => {
  xit('The enqueue() function will add a new item to the front of the queue', ()=> {
    let queue = new QueueWithStacks();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    queue.enqueue(2);
    expect(queue.front.value).toBe(2);
    queue.enqueue(3);
    expect(queue.front.value).toBe(3);
    queue.enqueue(4);
    expect(queue.front.value).toBe(4);
  });
});

// describe('Dequeue', () => {
//   it('The dequeue() function reverse the order of the stack and then pop the value', ()=> {
//     let queue = new QueueWithStacks();
//     queue.enqueue(1);
//     queue.enqueue(2);
//     queue.enqueue(3);
//     queue.enqueue(4);
//     console.log('enqueue queue', queue);
//     queue.dequeue();
//     console.log('new queue', queue);
//     expect(queue.front.value).toBe(4);
//   });
// });