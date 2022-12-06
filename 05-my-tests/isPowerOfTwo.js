function isPowerOfTwo(n) {
  return n > 0 && n.toString(2).match(/1/g).length === 1;
}

module.exports = {
  isPowerOfTwo
};