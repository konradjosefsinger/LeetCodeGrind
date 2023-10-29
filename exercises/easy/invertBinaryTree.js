/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val === undefined ? 0 : val);
 * this.left = (left === undefined ? null : left);
 * this.right = (right === undefined ? null : right);}
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTreeV1 = function(root) {
  if (root !== null) {
    [root.left, root.right] = [root.right, root.left];
    invertTreeV1(root.left);
    invertTreeV1(root.right);
  }
}

const invertTreeV2 = function(root) {
  if (!root) {
    return null;
  }
  // create a queue for level-order traversal
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    // swap the left and right children of the current node
    [node.left, node.right] = [node.right, node.left];
    // Add the left and right children to the queue if they exist
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
};
// -> This iterative approach is often preferred when dealing with very large trees to avoid potential stack overflow errors that can occur with deep recursion. It also has the advantage of being more easily adaptable to other tree traversal algorithms, such as level-order traversal.

