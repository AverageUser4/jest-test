const { stringCompare, getMostSimiliarString } = require('./stringCompare');

describe('stringCompare', () => {
  
  describe('exception handling', () => {

    it('throws when non-string is provided', () => {
      expect(() => stringCompare('abc', 1)).toThrow();
      expect(() => stringCompare(1, 'abc')).toThrow();
    });
    
  });

  describe('works as expected', () => {

    it('returns a number', () => {
      expect(stringCompare('abc', 'abc')).toEqual(expect.any(Number));
    });

    it('returns 100 for two empty strings', () => {
      expect(stringCompare('', '')).toBeCloseTo(100);
    });

    it('returns 0 for empty string and non-empty string', () => {
      expect(stringCompare('', 'abc')).toBeCloseTo(0);
      expect(stringCompare('abc', '')).toBeCloseTo(0);
    });

    it('returns 50 when only half of the characters matches', () => {
      expect(stringCompare('abcd', 'cdef')).toBeCloseTo(50);
      expect(stringCompare('cdef', 'abcd')).toBeCloseTo(50);
    });
    
    it('returns 50 when one string is twice as long than another and both have same characters', () => {
      expect(stringCompare('ab', 'abcd')).toBeCloseTo(50);
      expect(stringCompare('abcd', 'ab')).toBeCloseTo(50);
    })
    
    it('returns 25 when both strings consist of only one particular character, but one string is 4x longer', () => {
      expect(stringCompare('aaaa', 'a')).toBeCloseTo(25);
      expect(stringCompare('a', 'aaaa')).toBeCloseTo(25);
    });
    
  });

});

describe('getMostSimiliarString', () => {

  describe('exception handling', () => {

    it('throws when first argument is not a string', () => {
      expect(() => getMostSimiliarString(1, ['abc', 'cba'])).toThrow();
    });
    
    it('throws when second argument is not an array, is empty array or contains non-strings', () => {
      expect(() => getMostSimiliarString('abc', 1)).toThrow();
      expect(() => getMostSimiliarString('abc', [])).toThrow();
      expect(() => getMostSimiliarString('abc', ['abc', 7])).toThrow();
    });

  });

  describe('works as expected', () => {

    it('returns identical element', () => {
      expect(getMostSimiliarString('abc', ['cat', 'abc', 'dog', 'pig'])).toBe('abc');
    });

    it('returns element with the most matching letters', () => {
      expect(getMostSimiliarString('abcd', ['zxc', 'cvba', 'aaaa', 'ab'])).toBe('cvba');
    });
    
  });
  
});