class Solution {
  nextPermutation(arr) {
    // code here
    let pivot = -1;
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] > arr[i - 1]) {
        pivot = i - 1;
        break;
      }
    }

    if (pivot === -1) {
      return arr.reverse();
    }

    let swapIndex = arr.length - 1;

    while (arr[swapIndex] <= arr[pivot]) {
      swapIndex--;
    }

    [arr[pivot], arr[swapIndex]] = [arr[swapIndex], arr[pivot]];

    let rightPart = arr.slice(pivot + 1).reverse();
    for (let i = pivot + 1; i < arr.length; i++) {
      arr[i] = rightPart[i - (pivot + 1)];
    }
    return arr;
  }
}

exports.Solution = Solution;
