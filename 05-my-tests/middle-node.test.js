const { 
  createList,
  throwOnInvalidNode,
  getListLength,
  getNthListElement,
  middleNode
} = require('./middle-node');

function getFreshList(length) {
  switch(length) {
    case 1:
      return { val: 1 };

    case 2:
      return { val: 1, next: { val: 2 } };

    default:
      return {    
        val: 'abc',
        next: { val: null, next: { val: 7 } }
      };
  }
}

function doesNotModify(callback, ...rest) {
  const list = getFreshList();

  callback(list, ...rest);

  expect(list).toEqual(getFreshList());
}

describe('createList', () => {

  it('throws with no value provided', () => {
    expect(() => createList()).toThrow();
  })

  it('throws when a provided value is undefined', () => {
    expect(() => createList(1, 5, undefined, 7)).toThrow();
  });

  it('returns correct object', () => {
    expect(createList(2, -7, 'b')).toEqual({
      val: 2,
      next: {
        val: -7,
        next: { val: 'b' }
      }
    });
  });
  
});

describe('throwOnInvalidNode', () => {

  it('doesn\'t throw for valid note', () => {
    expect(() => throwOnInvalidNode({ val: 7 })).not.toThrow();
  });

  it("throws when node doesn't have 'val' attribute", () => {
    expect(() => throwOnInvalidNode({ name: 'adam' })).toThrow();
  });
  
  it("throws when first argument is not an object", () => {
    expect(() => throwOnInvalidNode(5)).toThrow();
  });

  it('does not modify the list', () => doesNotModify(throwOnInvalidNode));
  
});

describe('getListLength', () => {

  it('returns correct length of 1', () => {
    expect(getListLength(getFreshList(1))).toBe(1);
  })
  
  it('returns correct length of 2', () => {
    expect(getListLength(getFreshList(2))).toBe(2);
  });
  
  it('returns correct length of 3', () => {
    expect(getListLength(getFreshList(3))).toBe(3);
  })

  it('does not modify the list', () => doesNotModify(getListLength));
  
});

describe('getNthListElement', () => {

  it('throws when n is not an integer', () => {
    expect(() => getNthListElement({ val: 1 }, 5.2)).toThrow();
  });

  it('throws when list does not have at least n items', () => {
    expect(() => getNthListElement(getFreshList(2), 3)).toThrow();
  });

  /* checks for odd / even numbers are good idea */

  it('correctly returns first item', () => {
    const list = getFreshList();
    expect(getNthListElement(list, 1)).toBe(list);
  });

  it('correctly returns middle item', () => {
    const list = getFreshList();
    expect(getNthListElement(list, 2)).toBe(list.next);
  });

  it('correctly returns last item', () => {
    const list = getFreshList();
    expect(getNthListElement(list, 3)).toBe(list.next.next);
  });

  it('does not modify the list', () => doesNotModify(getNthListElement, 1));
  
});