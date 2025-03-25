class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        let sortedArr = arr.slice().sort((a,b) => b-a);
        if (sortedArr.length < 2) return -1;
        let largest = sortedArr[0];
        for (let num of sortedArr){
            if (num < largest) return num;
        }
        return -1;
    }
}