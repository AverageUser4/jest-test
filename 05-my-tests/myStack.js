class MyQueue {

  _size = 0;
  _head = {};

  pushToBack(value) {
    this._size++;
    
    if(!this._head.value) {
      this._head.value = value;
      return;
    }

    let copy = this._head;

    while(copy.next)
      copy = copy.next;

    copy.next = { value };
  }

  peek() {
    return this._head;
  }

  pop() {
    if(!this._head.value)
      return;

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

  push(x) {

  }

  pop() {
    return 'popped item';
  }

  top() {
    return 'top item';
  }

  empty() {
    return 'is empty';
  }

}

module.exports = {
  MyQueue,
  MyStack
};

// export default MyQueue;