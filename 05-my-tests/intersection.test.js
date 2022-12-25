const { intersection } = require('./intersection');

function expectSameArray(actual, desired) {
  expect(actual).toEqual(expect.arrayContaining(desired));
  expect(actual.length).toBe(desired.length);
}

describe('intersection', () => {

  describe('exception handling', () => {

    it('throws when first argument is not an array or is an empty array', () => {
      expect(() => intersection(1, [1, 2, 3])).toThrow();
      expect(() => intersection([], [1, 2, 3])).toThrow();
    });
    
    it('throws when second argument is not an array or is an empty array', () => {
      expect(() => intersection([1, 2, 3], 1)).toThrow();
      expect(() => intersection([1, 2, 3], [])).toThrow();
    });
    
  });

  describe('edge cases', () => {

    it('returns the same array for two identical arrays', () => {
      expectSameArray(intersection([1, 2, 3]), [1, 2, 3]);
    });
    
  });
  
});