const findJohn = require('./findJohn');

describe('findJohn works', () => {

  it('finds john', () => {
    expect(findJohn('john')).toBe(true);
    expect(findJohn('j30195john531j9583')).toBe(true);
  });

  it('says truth that there is no john', () => {
    expect(findJohn('nodhon')).toBe(false);
    expect(findJohn('')).toBe(false);
  });

  it('returns false for weird arguments', () => {
    expect(findJohn(7)).toBe(false);
    expect(findJohn(Symbol())).toBe(false);
    expect(findJohn({})).toBe(false);
    expect(findJohn([])).toBe(false);
  });

  it('is case insensitive', () => {
    expect(findJohn('JOHN')).toBe(true);
    expect(findJohn('JoHn')).toBe(true);
    expect(findJohn('dsah1234JoHN')).toBe(true);
    expect(findJohn('johN4124')).toBe(true);
  });
  
});