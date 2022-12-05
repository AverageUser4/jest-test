const multiply = require('./multiply');

describe('multiply function works fine', () => {

  it('throws when it has no valid arguments provided', () => {
    expect(() => multiply()).toThrow(Error);
    expect(() => multiply(1)).toThrow();
    expect(() => multiply(1, '5abc')).toThrow();
  });

  it('takes indefinite amount of arguments', () => {
    expect(multiply(1, 2, 3, 4, 5, 6)).toBe(1 * 2 * 3 * 4 * 5 * 6);
  })

  it('returns expected values', () => {
    expect(multiply(3, 3)).toBe(3 * 3);
    expect(multiply(-1, -2, 3)).toBe(-1 * -2 * 3);
    expect(multiply(5, -5, 4)).toBe(5 * -5 * 4);
    expect(multiply(0.7, 0.2, 0.3)).toBeCloseTo(0.7 * 0.2 * 0.3);
    expect(multiply(9, 5, 0)).toBe(0);
  });
  
});