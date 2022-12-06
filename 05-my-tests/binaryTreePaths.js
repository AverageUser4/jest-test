/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function createBinaryTree(values, index = 0) {
  /*
    values are inserted like in breadth first algorithm, eg. for
    values = [1, 2, 3, 4]:
      1 - head
      2 - left of head
      3 - right of head
      4 - left of 2

    null in values means no node should be created on that place
    note that if 2 === null, 4 and 5 won't get rendered
  */

  const node = { val: values[index], left: null, right: null };

  const leftIndex = index * 2 + 1;
  const rightIndex = leftIndex + 1;

  if(values?.[leftIndex])
    node.left = createBinaryTree(values, leftIndex);
  if(values?.[rightIndex])
    node.right = createBinaryTree(values, rightIndex);

  return node;
}

function getPaths(node, currentPath, paths) {
  if(!node)
    return;

  currentPath.push(node.val);

  if(!node.left && !node.right) {
    let pathStr = `${currentPath[0]}`;

    for(let i = 1; i < currentPath.length; i++)
      pathStr += `->${currentPath[i]}`;

    paths.push(pathStr);
  }

  getPaths(node.left, [...currentPath], paths);
  getPaths(node.right, [...currentPath], paths);
}

function binaryTreePaths(root) {
  const currentPath = [];
  const paths = [];

  getPaths(root, currentPath, paths)

  return paths;
}

module.exports = {
  binaryTreePaths,
  createBinaryTree
};