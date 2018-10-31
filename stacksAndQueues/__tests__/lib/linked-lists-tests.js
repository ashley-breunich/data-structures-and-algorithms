'use strict';

let LL = require('../../lib/linked-list.js');

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

describe('Delete from End', () => {
  it('deleteFromEnd() will delete the last node from the linked list', ()=> {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    list.deleteFromEnd();
    expect(list.tail.value).toBe(2);
  });

});

describe('Get Last Value', () => {
  it('getLastValue() will get the last value from the linked list', ()=> {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.getLastValue();
    expect(list.tail.value).toBe(4);
  });

});