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

const levels = [];
// Depth-first search - added depth tracking and levels array
function traverse(node, depth = 0) {
  if (!levels[depth]) {
    levels[depth] = [];
  }

  levels[depth].push(node.value);

  console.log(node.value, depth);
  if (node.left) {
    traverse(node.left, depth + 1);
  }
  if (node.right) {
    traverse(node.right, depth + 1);
  }
}

traverse(rootNode);

for (let level = 0; level < levels.length; level++) {
  console.log(`Level ${level}:`, levels[level].join(", "));
}
