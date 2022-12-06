const { createList, isPalindrome } = require('./isPalindrome');

describe('createList', () => {

  it('throws when no value is provided', () => {
    expect(() => createList()).toThrow();
  });
  
  it('creates list with 1 item', () => {
    expect(createList(1)).toEqual({ val: 1, next: null });
  });

  it('creates list with 2 items', () => {
    expect(createList(1, 2)).toEqual({ val: 1, next: { val: 2, next: null } });
  });

  it('creates list with 3 items', () => {
    expect(createList(1, 2, 3)).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } });
  });

});

describe('isPalindrome', () => {

  describe('odd list length', () => {

    it('single value is a palindrome', () => {
      expect(isPalindrome(createList(1))).toBe(true);
    });

    it('[1, 2, 3] is not a palindrome', () => {
      expect(isPalindrome(createList(1, 2, 3))).toBe(false);
    });

    it('[1, 2, 1] is a palindrome', () => {
      expect(isPalindrome(createList(1, 2, 1))).toBe(true);
    });

    it('[1, 2, 3, 2, 5] is not a palindrome', () => {
      expect(isPalindrome(createList(1, 2, 3, 2, 5))).toBe(false);
    });

    it('[1, 2, 3, 2, 1] is a palindrome', () => {
      expect(isPalindrome(createList(1, 2, 3, 2, 1))).toBe(true);
    });

  })

  describe('even list length', () => {

    it('[1, 2] is not a palindrome', () => {
      expect(isPalindrome(createList(1, 2))).toBe(false);
    });

    it('[1, 1] is a palindrome', () => {
      expect(isPalindrome(createList(1, 1))).toBe(true);
    });

    it('[1, 2, 3, 1] is not a palindrome', () => {
      expect(isPalindrome(createList(1, 2, 3, 1))).toBe(false);
    });

    it('[1, 2, 2, 1] is a palindrome', () => {
      expect(isPalindrome(createList(1, 2, 2, 1))).toBe(true);
    });

  });

});