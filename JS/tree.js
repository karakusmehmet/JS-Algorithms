class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      /* if(root.left === null){
            root.left = node
        }
        else{
            this.insertNode(root.left,node)
        } */
      root.left === null
        ? (root.left = node)
        : this.insertNode(root.left, node);
    } else {
      /* if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      } */
      root.right === null
        ? (root.right = node)
        : this.insertNode(root.right, node);
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preorder(root) {
    if (!root) {
      return;
    }
    console.log(root.value);
    this.preorder(root.left);
    this.preorder(root.right);
  }
  inorder(root) {
    if (!root) {
      return;
    }
    this.inorder(root.left);
    console.log(root.value);
    this.inorder(root.right);
  }
  postorder(root) {
    if (!root) {
      return;
    }
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.value);
  }
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  minNode(root) {
    if (!root) {
      return null;
    } else if (root.left) {
      return this.minNode(root.left);
    } else {
      return root.value;
    }
  }
  maxNode(root) {
    if (!root) {
      return null;
    } else if (root.right) {
      return this.maxNode(root.right);
    } else {
      return root.value;
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minNode(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(15);
bst.insert(8);
bst.insert(19);
bst.insert(1);
bst.insert(4);
bst.levelOrder();
bst.delete(4);
bst.levelOrder();
