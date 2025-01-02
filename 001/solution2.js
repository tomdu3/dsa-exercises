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

// Breadth First Search
function traverse(node) {
  const queue = [];
  queue.push({ node, depth: 0 });

  while (queue.length > 0) {
    const { node, depth } = queue.shift();
    console.log(node.value);

    if (node.left) {
      queue.push({ node: node.left, depth: depth + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, depth: depth + 1 });
    }
  }
}

traverse(rootNode);
