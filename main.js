import MyQueue from './05-my-tests/myStack.js';

const cl = (...x) => x.forEach((x) => console.log(x));

const queue = new MyQueue();

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

cl(queue)