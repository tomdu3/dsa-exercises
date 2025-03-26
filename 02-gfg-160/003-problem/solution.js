// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        for (let i=0; i < Math.floor(arr.length / 2); i++) {
            [arr[i], arr[arr.length - i-1]] = [arr[arr.length - i-1], arr[i]]
        }
    return arr;
    }
}

module.exports = Solution;