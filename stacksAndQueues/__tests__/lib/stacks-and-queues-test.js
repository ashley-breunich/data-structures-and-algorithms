'use strict';

let Stacks = require('../../lib/stacks.js');
let Queue = require('../../lib/queues.js');

describe('Stacks', () => {
  it('Stack Constructor will be null', ()=> {
    let stack = new Stacks();
    expect(stack.top).toBeNull();
  });
});

describe('Push', () => {
  it('The stacks push() function will add a new item to the top of the stack', ()=> {
    let stack = new Stacks();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    stack.push(2);  
    expect(stack.top.value).toBe(2);
    stack.push(3);  
    expect(stack.top.value).toBe(3);  
    stack.push(4); 
    expect(stack.top.value).toBe(4);
  });
});

describe('Pop', () => {
  it('The stacks pop() function will remove the top value from a stack', ()=> {
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

describe('Peek', () => {
  it('The stacks peek() function will return the top value', ()=> {
    let stack = new Stacks();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    stack.push(2);  
    expect(stack.top.value).toBe(2);
    stack.push(3);  
    expect(stack.top.value).toBe(3);  
    stack.push(4); 
    expect(stack.top.value).toBe(4);
    stack.peek();
    expect(stack.top.value).toBe(4);
  });
});

describe('Queue', () => {
  it('Queue Constructor will be null', ()=> {
    let queue = new Queue();
    expect(queue.front).toBeNull();
  });
});

describe('Enqueue', () => {
  it('The stacks push() function will add a new item to the top of the stack', ()=> {
    let queue = new Queue();
    queue.enqueue(4);
    expect(queue.front.value).toBe(4);
    queue.enqueue(3);
    expect(queue.front.value).toBe(3);
    queue.enqueue(2);
    expect(queue.front.value).toBe(2);
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    console.log(queue);
  });
});