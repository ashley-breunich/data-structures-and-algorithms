'use strict';

let Shelter = require('../fifo-animal-shelter.js');
  
describe('When you enqueue an animal, it will add it to the Shelter Queue.', () => {
  it('When you enqueue an animal, it will add it to the Shelter Queue.', ()=> {
    let queue = new Shelter.AnimalShelter();
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    // console.log('animal shelter queue', queue);
  });
});

describe('When the preference is a cat, it will return the first cat', () => {
  it('When the preference is a cat, it will return the first cat', ()=> {
    let queue = new Shelter.AnimalShelter();
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    let dequeueValue = queue.dequeue('cat');
    expect(dequeueValue).toEqual('cat');
  });
});

describe('When the preference is a dog, it will return the first dog', () => {
  it('When the preference is a dog, it will return the first dog', ()=> {
    let queue = new Shelter.AnimalShelter();
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('cat');
    expect(queue.shelterQueue.front.value).toBe('cat');
    queue.enqueue('dog');
    expect(queue.shelterQueue.front.value).toBe('dog');
    let dequeueValue = queue.dequeue('dog');
    expect(dequeueValue).toEqual('dog');
  });
});

// describe('When the preference is neither a dog nor a cat, it will return the oldest animal', () => {
//   it('pseudoQueue Constructor will be null', ()=> {
//     let queue = new Shelter.AnimalShelter();
//     queue.enqueue('cat');
//     expect(queue.shelterQueue.front.value).toBe('cat');
//     queue.enqueue('cat');
//     expect(queue.shelterQueue.front.value).toBe('cat');
//     queue.enqueue('cat');
//     expect(queue.shelterQueue.front.value).toBe('cat');
//     queue.enqueue('dog');
//     expect(queue.shelterQueue.front.value).toBe('dog');
//     let dequeueValue = queue.dequeue('bird');
//     expect(dequeueValue).toEqual('dog');
//   });
// });
