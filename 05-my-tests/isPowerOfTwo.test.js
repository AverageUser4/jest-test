const { isPowerOfTwo } = require('./isPowerOfTwo');

describe('isPowerOfTwo', () => {

  describe('normal cases', () => {

    it('5 is not power of 2', () => {
      expect(isPowerOfTwo(5)).toBe(false);
    });
    
    it('2134 is not power of 2', () => {
      expect(isPowerOfTwo(2134)).toBe(false);
    });

    it('4 is power of 2', () => {
      expect(isPowerOfTwo(4)).toBe(true);
    });
    
    it('512 is power of 2', () => {
      expect(isPowerOfTwo(512)).toBe(true);
    });
    
    it('524288 is power of 2', () => {
      expect(isPowerOfTwo(524288)).toBe(true);
    });

    it('524289 is not power of 2', () => {
      expect(isPowerOfTwo(524289)).toBe(false);
    });
    
  });

  describe('edge cases', () => {

    it('floating point number is not power of 2', () => {
      expect(isPowerOfTwo(2.0001)).toBe(false);
    });
    
    it('negative number is not power of 2', () => {
      expect(isPowerOfTwo(-4)).toBe(false);
    });

    it('0 is not power of 2', () => {
      expect(isPowerOfTwo(0)).toBe(false);
    });

    it('1 is power of 2', () => {
      expect(isPowerOfTwo(1)).toBe(true);
    });

    it('-1 * pow(2, 31) is not power of two', () => {
      expect(isPowerOfTwo(-(2 ** 31))).toBe(false);
    });

    it('pow(2, 31) -1 is not power of two', () => {
      expect(isPowerOfTwo(2 ** 31 - 1)).toBe(false);
    });
    
  });

});