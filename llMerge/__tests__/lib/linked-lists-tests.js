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