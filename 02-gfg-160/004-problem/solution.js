// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 */

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    reverse(arr, start, end) {
        for (let i=0; i<(end - start + 1) / 2; i++) {
            [arr[start + i], arr[end-i]] = [arr[end-i], arr[start + i]];
        }
    }
    
    rotateArr(arr, d) {
        d = d % arr.length;
        
        // reverse array
        this.reverse(arr, 0, arr.length -1)
        
        // reverse back first part of the element (length - d)
        this.reverse(arr, 0, arr.length - d -1)
        
        // reverse back d remaining elements
        this.reverse(arr, arr.length -d, arr.length - 1);
    }
}

module.exports = Solution;