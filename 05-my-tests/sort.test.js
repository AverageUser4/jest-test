const sort = require('./sort');

describe('exception handling', () => {

  it('throws when something else than array is provided to it', () => {
    expect(() => sort('banana')).toThrow();
  });

  it('throws when something else than a number is in the array', () => {
    expect(() => sort([13, 55, 'abc', 12])).toThrow();
  });
  
});

describe('sorts numbers properly', () => {

  it('sorts an array of integers', () => {
    expect(sort([5, 1, 3, 0, 17])).toEqual([0, 1, 3, 5, 17]);
  });

  it('sorts an array with negative numbers', () => {
    expect(sort([20, -3, 0, 1, 8, -15])).toEqual([-15, -3, 0, 1, 8, 20]);
  });

  it('sorts an array with floating point numbers', () => {
    expect(sort([5, 0.3, 0.33, 0.4, 0.2, 0])).toEqual([0, 0.2, 0.3, 0.33, 0.4, 5]);
  });

  it('sorts an array with negative floating point numbers', () => {
    expect(sort([0.3, 0.33, 7, -0.4, 0.2])).toEqual([-0.4, 0.2, 0.3, 0.33, 7]);
  });

});

describe('edge cases', () => {

  it('returns empty array for empty array provided', () => {
    expect(sort([])).toEqual([]);
  });

  it('returns array with 1 element, when 1 element is provided', () => {
    expect(sort([1])).toEqual([1]);
  });
  
});