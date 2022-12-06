const { binaryTreePaths, createBinaryTree } = require('./binaryTreePaths');

describe('createBinaryTree', () => {

  it('creates tree with one node', () => {
    expect(createBinaryTree([1])).toEqual({
      val: 1, left: null, right: null
    });
  });

  it('creates tree with two nodes', () => {
    expect(createBinaryTree([1, 2])).toEqual({
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: null
    });
  });

  it('creates tree with three nodes', () => {
    expect(createBinaryTree([1, 2, 3])).toEqual({
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    });
  });

  it('creates tree with four nodes', () => {
    expect(createBinaryTree([1, 2, 3, 4])).toEqual({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null  
        },
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    });
  });

  it('skips node when null is provided', () => {
    expect(createBinaryTree([1, 2, null, 4])).toEqual({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null  
        },
        right: null
      },
      right: null
    });
  });
  
});