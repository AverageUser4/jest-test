function isPalindrome(head) {
  const array = [];
  let copy = head;

  while(copy) {
    array.push(copy.val);
    copy = copy.next;
  }

  for(let i = 0; i < array.length; i++) {
    if(array[i] !== array[array.length - 1 - i])
      return false;
  }

  return true;
}

function createList(...values) {
  if(!values.length)
    throw new Error('List has to have at least one item');

  const head = {};
  let copy = head;

  for(let i = 0; i < values.length; i++) {
    copy.val = values[i];
    copy.next = i < values.length - 1 ? {} : null;
    copy = copy.next;
  }

  return head;
}

module.exports = {
  isPalindrome,
  createList
};