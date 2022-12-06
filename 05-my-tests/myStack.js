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
    this.queue = new MyQueue();
  }
  
  push(x) {
    this.queue.pushToBack(x);
    this.topItem = x;

    return null;
  }

  pop() {
    if(this.queue.empty())
      return null;

    const size = this.queue.size();

    let secondToLast = null;

    for(let i = 0; i < size - 1; i++) {
      const p = this.queue.pop();
      if(i === size - 2)
        secondToLast = p;
      this.queue.pushToBack(p);
    }

      const poppedItem = this.queue.pop();
      this.topItem = secondToLast;

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