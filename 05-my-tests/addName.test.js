const addName = require('./addName');

describe('works as expected', () => {

  it('adds name to an empty object', () => {
    const obj = {};
    addName(obj, 'adam');
    expect(obj).toEqual({ name: 'adam' });
  });

  it('adds name to populated object', () => {
    const obj = { age: 23, occupation: 'shop keeper' };
    addName(obj, 'bob');
    expect(obj).toEqual({ age: 23, occupation: 'shop keeper', name: 'bob' });
  });

  it('replaces exsiting name when force parameter is set to true', () => {
    const obj = { name: 'richard' };
    addName(obj, 'dick', true);
    expect(obj).toEqual({ name: 'dick' });
  });
  
});

describe('exception handling', () => {
  
  it('throws when you try to replace existing name', () => {
    const obj = { name: 'monica' };
    expect(() => addName(obj, 'maria')).toThrow();
  });
  
  it('throws when first argument is not an object', () => {
    expect(() => addName('apple', 'david')).toThrow();
  });

  it('throws when second argument is not a string', () => {
    expect(() => addName({}, 100)).toThrow();
  });
  
});