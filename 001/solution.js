const rootNode = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};

function printTree(node) {
  console.log(node.value);
  if (node.left) {
    printTree(node.left);
  }
  if (node.right) {
    printTree(node.right);
  }
}

printTree(rootNode);
