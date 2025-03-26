class Solution {
    pushZerosToEnd(arr) {
        let count = 0
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] !== 0) {
                [arr[index], arr[count]] = [arr[count], arr[index]]  // swap the non-zero element with the zero element
                count++;  // increment count to move to the index after the last non-zero element
            }
        }
    }
}

module.exports = Solution;