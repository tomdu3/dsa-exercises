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

  let lastDepth = 0;
  let output = "";

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    if (depth > lastDepth) {
      output += "\n";
      lastDepth = depth;
    }

    output += node.value + ", ";
    if (node.left) {
      queue.push({ node: node.left, depth: depth + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, depth: depth + 1 });
    }
  }
  console.log(output);
}

traverse(rootNode);
