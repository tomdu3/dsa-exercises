class Solution {
    pushZerosToEnd(arr) {
        let count = 0
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] !== 0) {
                [arr[index], arr[count]] = [arr[count], arr[index]]
                count++;
            }
        }
    }
}

module.exports = Solution;