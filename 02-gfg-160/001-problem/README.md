# Second Largest
- difficulty: Easy

Given an array of **positive** integers **arr\[\]**, return the **second largest** element from the array. If the second largest element doesn't exist then return **\-1.**

Note: The second largest element should not be equal to the largest element.

**Examples:**


><span><strong>Input:</strong> arr[] = [12, 35, 1, 10, 34, 1]
<strong>Output:</strong> 34
<strong>Explanation: </strong>The largest element of the array is 35 and the second largest element is 34.</span>



><span><strong>Input:</strong> arr[] = [10, 5, 10]
<strong>Output:</strong> 5
<strong>Explanation: </strong>The largest element of the array is 10 and the second largest element is 5.</span>


><span><strong>Input:</strong> arr[] = [10, 10, 10]
<strong>Output:</strong> -1
<strong>Explanation: </strong>The largest element of the array is 10 and the second largest element does not exist.</span>


**Constraints:**  
- 2 ≤ arr.size() ≤ 10<sup>5</sup>  
- 1 ≤ arr\[i\] ≤ 10<sup>5</sup>


***Case 1***
- **Input**
```js
arr = [12, 35, 1, 10, 34, 1]
```
- **Expected Output**
```js
34
```


### \[Better Approach\] Two Pass Search

> The approach is to traverse the array ****twice****. In the first traversal, find the ****maximum**** element. In the second traversal, find the maximum element ****ignoring the one we found in the first traversal****.

****Time Complexity:**** O(n), as we are traversing the array only once.  
****Auxiliary space:**** O(1)

****Related Article****: [Smallest and second smallest element in an array](https://www.geeksforgeeks.org/to-find-smallest-and-second-smallest-element-in-an-array/)

Useful links to help you understand the concepts of this problem:

-   [https://www.geeksforgeeks.org/find-second-largest-element-array/](https://www.geeksforgeeks.org/find-second-largest-element-array/)