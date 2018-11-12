'use strict';

let LL = require('../../ll-merge');
let list = new LL();


describe('Linked List Constructor', () => {
  it('constructor() will be null', ()=> {
    expect(list.head).toBeNull();
  });
});

describe('Merged Linked List', () => {
  it('mergeLists() will merge together two linked listed', ()=> {
    let ll1 = new LL();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    let ll2 = new LL();
    ll2.append(5);
    ll2.append(6);
    ll2.append(7);
    let newList = list.mergeLists(ll1,ll2);
    expect(newList.head.value).toBe(1);
    expect(newList.head.next.value).toBe(5);
    expect(newList.head.next.next.value).toBe(2);
    expect(newList.head.next.next.next.value).toBe(6);
    expect(newList.head.next.next.next.next.value).toBe(3);
    expect(newList.head.next.next.next.next.next.value).toBe(7);
  });
});