class MyQueue {

  _size = 0;
  _head = {};

  pushToBack(value) {
    this._size++;
    
    if(!this._head.value) {
      this._head.value = value;
      return null;
    }

    let copy = this._head;

    while(copy.next)
      copy = copy.next;

    copy.next = { value };

    return null;
  }

  peek() {
    return this._head.value || null;
  }

  pop() {
    if(!this._head.value)
      return null;

    const { value } = this._head;
    this._head = this._head.next || {};
    this._size--;

    return value;
  }

  empty() {
    return !Object.hasOwn(this._head, 'value');
  }

  size() {
    return this._size;
  }
  
}

class MyStack {

  topItem = null;

  constructor() {
    this.queue_1 = new MyQueue();
    this.queue_2 = new MyQueue();
    this.currentQueue = this.queue_1;
    this.helperQueue = this.queue_2;
  }
  
  push(x) {
    this.currentQueue.pushToBack(x);
    this.topItem = x;
    return null;
  }

  pop() {
    console.log(this.queue_1, this.queue_2)

    if(this.currentQueue.empty())
      return null;

    if(this.currentQueue.size() === 1)
      this.topItem = null;
      
    while(this.currentQueue.size() > 1) {
      const p = this.currentQueue.pop();
      this.topItem = p;
      this.helperQueue.pushToBack(p);
    }

    const poppedItem = this.currentQueue.pop();
    
    const buf = this.currentQueue;
    this.currentQueue = this.helperQueue;
    this.helperQueue = buf;
    
    return poppedItem;
  }

  top() {
    return this.topItem;
  }

  empty() {
    return this.topItem === null;
  }

}

module.exports = {
  MyQueue,
  MyStack
};

// export default MyQueue;