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

    case 3:
      return { val: 1, next: { val: 2, next: { val: 3 } } };

    case 4:
      return { val: 1, next: { val: 2, next: { val: 3, 
        next: { val: 4 } } } };

    case 5:
      return { val: 1, next: { val: 2, next: { val: 3,
        next: { val: 4, next: { val: 5 } } } } };

    case 6:
      return { val: 1, next: { val: 2, next: { val: 3,
        next: { val: 4, next: { val: 5, next: { val: 6 } } } } } };

    default:
      throw new Error("'getFreshList' function takes only a integer between 1 and 6 as first argument.");
  }
}

function doesNotModify(callback, ...rest) {
  const list = getFreshList(3);

  callback(list, ...rest);

  expect(list).toEqual(getFreshList(3));
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

  it('correctly returns first item', () => {
    const list = getFreshList(3);
    expect(getNthListElement(list, 1)).toBe(list);
  });

  it('correctly returns last item (odd)', () => {
    const list = getFreshList(3);
    expect(getNthListElement(list, 3)).toBe(list.next.next);
  });

  it('correctly returns last item (even)', () => {
    const list = getFreshList(4);
    expect(getNthListElement(list, 4)).toBe(list.next.next.next);
  });

  it('correctly returns nth item (even)', () => {
    const list = getFreshList(6);
    expect(getNthListElement(list, 4)).toBe(list.next.next.next);
  });

  it('correctly returns nth item (odd)', () => {
    const list = getFreshList(6);
    expect(getNthListElement(list, 5)).toBe(list.next.next.next.next);
  });

  it('does not modify the list', () => doesNotModify(getNthListElement, 1));
  
});

describe('middleNode', () => {

  it('returns provided node if the node has no children', () => {
    const list = getFreshList(1);
    expect(middleNode(list)).toBe(list);
  })

  it('returns 2nd node for list with 2 nodes', () => {
    const list = getFreshList(2);
    expect(middleNode(list)).toBe(list.next);
  });

  it('returns 3rd node for list with 5 nodes', () => {
    const list = getFreshList(5);
    expect(middleNode(list)).toBe(list.next.next);
  });
  
  it('returns 4th node for list with 6 nodes', () => {
    const list = getFreshList(6);
    expect(middleNode(list)).toBe(list.next.next.next);
  });
  
});