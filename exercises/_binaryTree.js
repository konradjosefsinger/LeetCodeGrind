// A binary tree is a tree data structure in which each node has a t most two children, which are referred to as the left child and the right child

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right
  }
};

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }
  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
  invert() {
    this._invertNode(this.root);
  }
  _invertNode(node) {
    if (node !== null) {
      [node.left, node.right] = [node.right, node.left];
      // Recursively invert the left and right subtree
      this._invertNode(node.left);
      this._invertNode(node.right);
    }
  }
  inOrderTraversal(node = this.root) {
    // In in-order-traversal, the nodes are visited in the following order: left child, current node, right child
    let result = [];
    if (node !== null) {
      result = result.concat(this.inOrderTraversal(node.left));
      result.push(node.data);
      result = result.concat(this.inOrderTraversal(node.right));
    }
    return result;
  }
  preOrderTraversal(node = this.root) {
    // In pre-order traversal, the nodes are visited in the following order: current node, left child, right child
    // -> It's useful for making a copy of the tree or when you want to visit the root node first
    let result = [];
    if (node !== null) {
      result.push(node.data);
      result = result.concat(this.preOrderTraversal(node.left));
      result = result.concat(this.preOrderTraversal(node.right));
    }
    return result;
  }
  postOrderTraversal(node = this.root) {
    // In post-order traversal, the nodes are visited in the following order: left child, right child, and then the current node. This means the root node is the last to be visited in this traversal.
    let result = [];
    if (node !== null) {
      result = result.concat(this.postOrderTraversal(node.left));
      result = result.concat(this.postOrderTraversal(node.right));
      result.push(node.data);
    }
    return result;
  }
  deleteNode(data) {
    this.root = this._deleteNode(this.root, data);
  }
  _deleteNode(node, data) {
    if (node == null) {
      return null;
    }
    if (data < node.data) {
      node.left = this._deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._deleteNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // When deleting a node from a binary search tree that has two children, one needs to ensure that the tree remains a valid binary search tree after the deletion
      // minimum node in the right subtree (successor)
      const minRight = this._findMinNode(node.right);
      node.data = minRight.data;
      node.right = this._deleteNode(node.right, minRight.data);
    }
    return node;
  }
  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}