const { myQueue, myStack, MyQueue } = require('./myStack');

let queue;

describe('myQueue', () => {

  beforeEach(() => {
    queue = new MyQueue();
  });
  
  it('creates expected object', () => {
    expect(queue).toEqual(
      expect.objectContaining({ _size: 0, _head: {} }));
  });

  it('adds expected value to the queue', () => {
    queue.pushToBack(5);
    expect(queue).toEqual(expect.objectContaining({
      _head: { value: 5 }
    }));
  });

  if('adds mutliple values to the queue', () => {
    queue.pushToBack(1);
    queue.pushToBack(2);
    expect(queue).toEqual(expect.objectContaining({
      _head: { value: 1, next: { value: 2 }}
    }));
  });

  it('increases the size when new item is added', () => {
    queue.pushToBack(5);
    expect(queue.size()).toBe(1);
  });
    
  it('pops the only item', () => {
    queue.pushToBack(1);
    queue.pop();
    expect(queue).toEqual(expect.objectContaining({
      _head: {}
    }));
  });

  it('pops one of many items', () => {
    queue.pushToBack(1);
    queue.pushToBack(2);
    queue.pushToBack(3);
    queue.pop();
    expect(queue).toEqual(expect.objectContaining({
      _head: { value: 2, next: { value: 3 } }
    }));
  });

  it('decreases size when popping item', () => {
    queue.pushToBack(1);
    queue.pop();
    expect(queue.size()).toBe(0);
  });

  it('returns popped item', () => {
    queue.pushToBack(5);
    expect(queue.pop()).toBe(5);
    expect(queue.size()).toBe(0);
  });
  
  it('returns undefined when popping empty queue', () => {
    expect((queue).pop()).toBeUndefined();
  });

  it('does not make size less than 0 when popping empty queue', () => {
    queue.pop();
    expect(queue.size()).toBe(0);
  });

  it('returns _size when size() is called', () => {
    expect(queue._size).toBe(queue.size());
  });

  it('empty returns true for empty queue', () => {
    expect(queue.empty()).toBe(true);
  });

  it('empty returns false for populated queue', () => {
    queue.pushToBack(1);
    expect(queue.empty()).toBe(false);
  });

  it('peek returns the head for empty queue', () => {
    expect(queue.peek()).toBe(queue._head);
  });
  
  it('peek returns the head for populated queue', () => {
    queue.pushToBack(1);
    expect(queue.peek()).toBe(queue._head);
  });

  it('multiple calls to different methods dont disrupt queue working', () => {
    queue.pop();
    queue.peek();
    queue.pushToBack(1);
    queue.pop();
    queue.empty();
    queue.pop();
    queue.size();
    queue.pushToBack(2);
    queue.size();
    queue.peek();
    queue.pushToBack(3);
    queue.pop();
    queue.pushToBack(4);
    expect(queue).toEqual(expect.objectContaining({
      _size: 2,
      _head: { value: 3, next: { value: 4 } }
    }));

    console.log('PENIS PENIS PENIS')
  });
  
});