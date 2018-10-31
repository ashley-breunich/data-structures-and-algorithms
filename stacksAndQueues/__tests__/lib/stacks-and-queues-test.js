'use strict';

let stacksQueues = require('../../lib/stacks-and-queues.js');

describe('Stacks and queues', () => {
  it('Stack Constructor will be null', ()=> {
    let stack = new stacksQueues();
    expect(stack.top).toBeNull();
  });
});

describe('Push', () => {
  it('The stacks push() function will add a new item to the top of the stack', ()=> {
    let stack = new stacksQueues();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    stack.push(2);  
    expect(stack.top.value).toBe(2);
    stack.push(3);  
    expect(stack.top.value).toBe(3);  
    stack.push(4); 
    expect(stack.top.value).toBe(4);
    console.log('PUSH STACK', stack);
  });
});

describe('Pop', () => {
  it('The stacks pop() function will remove the top value from a stack', ()=> {
    let stack = new stacksQueues();
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
    console.log('POP STACK', stack);
  });
});