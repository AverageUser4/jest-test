const sum = require('./sum');

describe('example tests', () => {

  it('should add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('object assignment', () => {
    expect({}).toEqual({});
  });

})

describe('truthy or falsy', () => {

  it('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });

  if('abc string is truthy', () => {
    const s = 'abc';
    expect(s).toBeTruthy();
    expect(s).toBe('abc');
  });
  
});

describe('numbers', () => {

  it('2 + 2 = 4', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(0);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(6969);
  });

  it('0.1 + 0.2 = 0.3', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });
  
});

describe('strings', () => {

  it('there is no "I" in team', () => {
    const value = 'team';
    expect(value).not.toMatch(/I/);
  });
  
});

describe('arrays', () => {

  it('has milk', () => {
    const shoppingList = ['milk', 'apple', 'bread', 'lemon'];
    expect(shoppingList).toContain('milk');
  });
  
});

function compileAndroidCode() {
  throw new Error('something went wrong...');
}

describe('exceptions', () => {

  it('throws', () => {
    expect(compileAndroidCode).toThrow('something went wrong...');
  });
  
});

// 28:30