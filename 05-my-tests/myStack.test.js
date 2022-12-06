const { MyQueue, myStack, MyStack } = require('./myStack');

let stack;
let queue;

describe('myQueue', () => {
  
  describe('empty queue', () => {
    
    beforeEach(() => {
      queue = new MyQueue();
    });

    it('empty() returns true', () => {
      expect(queue.empty()).toBe(true);
    });
  
    it('peek() returns null', () => {
      expect(queue.peek()).toBeNull();
    });
    
    it('pop() returns null', () => {
      expect(queue.pop()).toBeNull();
    });

    it('size() returns 0', () => {
      expect(queue.size()).toBe(0);
    })

    it('pushToBack() returns null', () => {
      expect(queue.pushToBack()).toBe(null);
    });
    
  });

  describe('queue with 1 item', () => {

    beforeEach(() => {
      queue = new MyQueue();
      queue.pushToBack(5);
    });

    it('empty() returns false', () => {
      expect(queue.empty()).toBe(false);
    });
    
    it('empty() returns true after pop', () => {
      queue.pop();
      expect(queue.empty()).toBe(true);
    });
    
    it('size() returns 1', () => {
      expect(queue.size()).toBe(1);
    });

    it('size() returns 0 after pop()', () => {
      queue.pop();
      expect(queue.size()).toBe(0);
    });

    it('peek() returns value of the head', () => {
      expect(queue.peek()).toBe(5);
    });

    it('peek() returns null after pop()', () => {
      queue.pop();
      expect(queue.peek()).toBeNull();
    });

    it('pop() returns value of the head', () => {
      expect(queue.pop()).toBe(5);
    });

    it('pop() returns null after pop()', () => {
      queue.pop();
      expect(queue.pop()).toBeNull();
    });
    
  });

  describe('queue with 2 items', () => {

    beforeEach(() => {
      queue = new MyQueue();
      queue.pushToBack(5);
      queue.pushToBack(6);
    });
    
    it('empty() returns false after pop', () => {
      queue.pop();
      expect(queue.empty()).toBe(false);
    });
    
    it('size() returns 2', () => {
      expect(queue.size()).toBe(2);
    });

    it('size() returns 1 after pop()', () => {
      queue.pop();
      expect(queue.size()).toBe(1);
    });

    it('peek() returns value of the head', () => {
      expect(queue.peek()).toBe(5);
    });

    it('peek() returns next value after pop()', () => {
      queue.pop();
      expect(queue.peek()).toBe(6);
    });

    it('pop() returns value of the head', () => {
      expect(queue.pop()).toBe(5);
    });

    it('pop() returns next value after pop()', () => {
      queue.pop();
      expect(queue.pop()).toBe(6);
    });

  });
  
  describe('behavior', () => {

    beforeEach(() => {
      queue = new MyQueue();
      queue.pushToBack(1);
      queue.pushToBack(2);
      queue.pushToBack(3);
      queue.pop();
      queue.pop();
      queue.pushToBack(4);
      queue.pushToBack(5);
      queue.pop();
    });

    it('correct empty() after multiple content changes', () => {
      expect(queue.empty()).toBe(false);
    });
    
    it('correct size() after multiple content changes', () => {
      expect(queue.size()).toBe(2);
    });
    
    it('correct peek() after multiple content changes', () => {
      expect(queue.peek()).toBe(4);
    });

    it('correct pop() return value after multiple content changes', () => {
      expect(queue.pop()).toBe(4);
    });
    
  });
  
});


describe('MyStack', () => {

  describe('empty stack', () => {

    beforeEach(() => {
      stack = new MyStack();
    });

    it('empty() returns true', () => {
      expect(stack.empty()).toBeTruthy();
    });
  
    it('top() returns null', () => {
      expect(stack.top()).toBeNull();
    });
    
    it('pop() returns null', () => {
      expect(stack.pop()).toBeNull();
    });

    it('push() returns null', () => {
      expect(stack.push()).toBeNull();
    });
    
  });
  
  describe('stack with 1 item', () => {

    beforeEach(() => {
      stack = new MyStack();
      stack.push(1);
    });
    
    it('top() returns correct item', () => {
      expect(stack.top()).toBe(1);
    });
    
    it('top() does not remove item', () => {
      stack.top();
      expect(stack.empty()).toBeFalsy();
    });
    
    it('pop() returns correct item', () => {
      expect(stack.pop()).toBe(1);
    });

    it('pop() removes item', () => {
      stack.pop();
      expect(stack.empty()).toBeTruthy();
    });

    it('empty() returns false', () => {
      expect(stack.empty()).toBeFalsy();
    });
    
  });

  describe('stack with 2 items', () => {

    beforeEach(() => {
      stack = new MyStack();
      stack.push(1);
      stack.push(2);
    });

    it('top() returns correct item', () => {
      expect(stack.top()).toBe(2);
    });
    
    it('top() returns correct item after pop()', () => {
      stack.pop();
      expect(stack.top()).toBe(1);
    });
    
    it('top() reutrns null after calling pop() twice', () => {
      stack.pop();
      stack.pop();
      expect(stack.top()).toBeNull();
    }); 
    
    it('pop() returns correct item', () => {
      expect(stack.pop()).toBe(2);
    });

    it('pop() returns correct item after pop()', () => {
      stack.pop();
      expect(stack.pop()).toBe(1);
    });

    it('empty() reutrns true after calling pop() twice', () => {
      stack.pop();
      stack.pop();
      expect(stack.empty()).toBeTruthy();
    }); 
    
  });

  describe('behavior', () => {

    beforeEach(() => {
      stack = new MyStack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.push(4);
      stack.push(5);
      stack.pop();
    });

    it('correct empty() after multiple content changes', () => {
      expect(stack.empty()).toBe(false);
    });
    
    it('correct top() after multiple content changes', () => {
      expect(stack.top()).toBe(4);
    });

    it('correct pop() return value after multiple content changes', () => {
      expect(stack.pop()).toBe(4);
    });
    
  });
  
});