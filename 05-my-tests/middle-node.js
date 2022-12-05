function createList(...items) {
  if(!items.length)
    throw new Error('You need to provide at least one list item.');
  if(items.findIndex(item => typeof item === 'undefined') >= 0)
    throw new Error("The list cannot contain 'undefined'.");

  const head = {}
  let copy = head;

  for(let i = 0; i < items.length; i++) {
    copy.val = items[i];
    copy.next = i < items.length - 1 ? {} : undefined;
    copy = copy.next;
  }

  return head;
}

function throwOnInvalidNode(node) {
  if(!node || typeof node?.val === 'undefined')
    throw new Error('Invalid node provided.');
}

function getListLength(head) {
  throwOnInvalidNode(head)

  let length = 1;

  while(head.next) {
    length++;
    head = head.next;
  }

  return length;
}

function getNthListElement(head, n) {
  throwOnInvalidNode(head);
  if(!Number.isInteger(n))
    throw new Exception("'getNthListElement' expects an integer as the second argument.");

  for(let i = 1; i <= n; i++) {
    if(!head)
      throw new Error('Provided list does not have enough elements');

    if(i === n)
      return head;
    
    head = head.next;
  }
}

function middleNode(head) {
  // throwOnInvalidNode(head);

  // return getNthListElement(head, Math.floor(getListLength(head) / 2) + 1);
  let slow = head;
  let fast = head.next;

  while(fast) {
    /*
      s = 1, f = 2
      s = 2, f = 4
      s = 3, f = 6
      s = 4, f = 8

    */
    slow = slow.next;
    fast = fast.next?.next;
  }

  return slow;
};

module.exports = {
  createList,
  throwOnInvalidNode,
  getListLength,
  getNthListElement,
  middleNode
};