### Move All Zeroes to End

Difficulty: **Easy**

You are given an array **arr\[\]** of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed **in place**, meaning you should not use extra space for another array.

**Examples:**


><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [1, 2, 0, 4, 3, 0, 5, 0] <br>
<strong>Output:</strong> [1, 2, 4, 3, 5, 0, 0, 0] <br>
<strong>Explanation:</strong> There are three 0s that are moved to the end.
</span>

><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [10, 20, 30] <br>
<strong>Output:</strong> [10, 20, 30] <br>
<strong>Explanation:</strong> No change in array as there are no 0s.
</span>

><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [0, 0] <br>
<strong>Output:</strong> [0, 0] <br>
<strong>Explanation:</strong> No change in array as there are all 0s.</span>

**Constraints:**  
1 ≤ arr.size() ≤ 10<sup>5</sup>  
0 ≤ arr\[i\] ≤ 10<sup>5</sup>

**Case 1**
```
Input:
arr[] = 3 5 0 0 4

Output:
3 5 4 0 0
```
****Related Article****: [Move Zeroes End Array](https://www.geeksforgeeks.org/move-zeroes-end-array/)