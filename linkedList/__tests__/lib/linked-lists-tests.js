'use strict';

let LL = require('../../lib/linked-lists.js');

describe('Linked List Constructor', () => {
  it('constructor() will be null', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });
});

describe('Append', () => {
  it('Append will keep the same head value when new values are appended.', ()=> {
    let list = new LL();
    list.append(1);  
    list.append(2);
    list.append(3);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
  });

  it('if there is no head, the head will become the node value entered', ()=> {
    let list = new LL();
    list.prepend('1');
    expect(list.head.value).toBe('1');
  });

});

describe('Prepend', () => {

  it('prepend() will change the head to the most recently prepended value', ()=> {
    let list = new LL();
    list.append('John');
    list.append('Cathy');
    list.append('Mary');
    list.prepend('Joey');
    list.prepend('Alyssa');
    expect(list.head.value).toBe('Alyssa');
    expect(list.head.next.value).toBe('Joey');
    expect(list.head.next.next.value).toBe('John');
  });

  it('if there is no head, the head will become the node value entered', ()=> {
    let list = new LL();
    list.prepend('Joey');
    expect(list.head.value).toBe('Joey');   
  });

});

describe('Insert Before', () => {
  it('insertBefore() will add a new value before the specific value', ()=> {
    let list = new LL();
    list.append('blue');
    list.append('green');
    list.append('yellow');
    list.insertBefore('green', 'pink');
    expect(list.head.value).toBe('blue');
    expect(list.head.next.value).toBe('pink');
    expect(list.head.next.next.value).toBe('green');
    expect(list.head.next.next.next.value).toBe('yellow');
  });

  it('insertBefore() will work if the matched value is the head', ()=> {
    let list = new LL();
    list.append('blue');
    list.append('green');
    list.append('yellow');
    list.insertBefore('blue', 'pink');
    expect(list.head.value).toBe('pink');
    expect(list.head.next.value).toBe('blue');
    expect(list.head.next.next.value).toBe('green');
    expect(list.head.next.next.next.value).toBe('yellow');
  });

  it('insertBefore() will work if the matched value is a next of null', ()=> {
    let list = new LL();
    list.append('blue');
    list.append('green');
    list.append('yellow');
    list.insertBefore('yellow', 'pink');
    expect(list.head.value).toBe('blue');
    expect(list.head.next.value).toBe('green');
    expect(list.head.next.next.value).toBe('pink');
    expect(list.head.next.next.next.value).toBe('yellow');
  });
});

describe('Insert After', () => {

  it('insertAfter() will add a new value after the specific value', ()=> {
    let list = new LL();
    list.append('blue');
    list.append('green');
    list.append('yellow');
    list.insertAfter('green', 'pink');
    expect(list.head.value).toBe('blue');
    expect(list.head.next.value).toBe('green');
    expect(list.head.next.next.value).toBe('pink');
    expect(list.head.next.next.next.value).toBe('yellow');
  });

  it('insertAfter() - if the matching value is the tail, the new node will be placed after', ()=> {
    let list = new LL();
    list.append('blue');
    list.append('green');
    list.append('yellow');
    list.append('red');
    list.insertAfter('red', 'pink');
    expect(list.head.value).toBe('blue');
    expect(list.head.next.value).toBe('green');
    expect(list.head.next.next.value).toBe('yellow');
    expect(list.head.next.next.next.value).toBe('red');
    expect(list.head.next.next.next.next.value).toBe('pink');
  });
});

// describe('Merged Linked List', () => {

//   it('mergeLists() will merge together two linked listed', ()=> {
//     let ll1 = new LL();
//     ll1.append(1);
//     ll1.append(2);
//     ll1.append(3);
//     console.log('ll1',ll1);
//     let ll2 = new LL();
//     ll2.append(5);
//     ll2.append(6);
//     ll2.append(7);
//     console.log('ll2', ll2);
//     let ll3 = new LL();
//     console.log('ll3', ll3);
//     ll3.mergeLists(ll1,ll2);
//     expect(ll3.head.value).toBe(1);
//     expect(ll3.head.next.value).toBe(5);
//     expect(ll3.head.next.next.value).toBe(2);
//     expect(ll3.head.next.next.next.next.value).toBe(6);
//     expect(ll3.head.next.next.next.next.next.value).toBe(3);
//     expect(ll3.head.next.next.next.next.next.next.value).toBe(7);
//   });

// });
// describe('Kth from End', () => {

//   it('kthFromEnd(k) will return value of linked list ', ()=> {
//     let list = new LL();
//     list.append('Owl');
//     list.append('Dog');
//     list.append('Llama');
//     list.append('Fox');
//     list.kthFromEnd(1);
//     console.log(list);
//     expect(list.kthFromEnd()).toEqual('Llama');
//   });
// });

describe('length of node', function(){
  it('length should be 0 for an empty list', () => {
    let list = new LL();
    expect(list.length()).toEqual(0);
  });

  it('length should be 1 for a list of one node', () => {
    let list = new LL();
    list.append('blue');
    expect(list.length()).toEqual(1);
  });

  it('length should be 5 for a list of five nodes', () => {
    let list = new LL();
    list.append('blue');
    list.append('green');
    list.append('yellow');
    list.append('red');
    list.append('pink');
    expect(list.length()).toEqual(5);
  });
});