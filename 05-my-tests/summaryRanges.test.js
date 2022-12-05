const { summaryRanges } = require('./summaryRanges');

describe('summaryRanges', () => {

  it('works with empty array', () => {
    expect(summaryRanges([])).toEqual([]);
  });
  
  it('works with single item in array', () => {
    expect(summaryRanges([1])).toEqual(['1'])
  });

  it('works with [1, 2]', () => {
    expect(summaryRanges([1, 2])).toEqual(['1->2']);
  });
  
  it('works with [1, 3]', () => {
    expect(summaryRanges([1, 3])).toEqual(['1', '3']);
  });
  
  it('works with [1, 2, 3]', () => {
    expect(summaryRanges([1, 2, 3])).toEqual(['1->3']);
  });
  
  it('works with [1, 2, 4]', () => {
    expect(summaryRanges([1, 2, 4])).toEqual(['1->2', '4']);
  });

  it('works with complex arrays', () => {
    expect(summaryRanges([1, 2, 5, 7, 8, 9, 10, 12, 15])).
      toEqual(['1->2', '5', '7->10', '12', '15']);
  });

  it('works with negative numbers and 0', () => {
    expect(summaryRanges([-5, -4, -2, 0, 1, 6])).toEqual(['-5->-4', '-2', '0->1', '6']);
  });
  
});