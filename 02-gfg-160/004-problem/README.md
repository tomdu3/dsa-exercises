# Rotate Array

Difficulty: **Medium**

Given an array _arr\[\]__**.**_ Rotate the array to the left (counter-clockwise direction) by _d_ steps, where _d_ is a positive integer. Do the mentioned change in the **array in place**.

Note: Consider the array as circular.

**Examples:**

><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [1, 2, 3, 4, 5], d = 2
<strong>Output: </strong>[3, 4, 5, 1, 2]
<strong>Explanation:</strong> when rotated by 2 elements, it becomes 3 4 5 1 2.</span>

><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
<strong>Output: </strong>[8, 10, 12, 14, 16, 18, 20, 2, 4, 6]<strong>
Explanation: </strong>when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.<br></span>

><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [7, 3, 9, 1], d = 9
<strong>Output: </strong>[3, 9, 1, 7]<strong>
Explanation: </strong>when we rotate 9 times, we'll get 3 9 1 7 as resultant array.</span>

**Constraints:**  
1 <= arr.size(), d <= 10<sup>5</sup>  
0 <= arr\[i\] <= 10<sup>5</sup>

```
Input:
arr[] = 1 2 3 4 5
d = 2

Expected Output:
3 4 5 1 2
```

- [Rotate an Array by d – Counterclockwise or Left](https://www.geeksforgeeks.org/array-rotation/)
- [Rotate an Array – Clockwise or Right](https://www.geeksforgeeks.org/complete-guide-on-array-rotations/)