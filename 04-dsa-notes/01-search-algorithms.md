# Sorting Algorithms

## Bubble Sort

**Explanation:**  
Bubble Sort is the simplest comparison-based algorithm in which adjacent elements are repeatedly compared and swapped if they are in the wrong order. The process is repeated until the list is completely sorted. It is easy to implement but inefficient for large lists due to its O(n²) worst-case time complexity [Sorting Algorithms in Python](https://realpython.com/sorting-algorithms-python/)[Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/).

**Example:**  
```python
def bubble_sort(lst):
    n = len(lst)
    for i in range(n - 1):
        # flag to check if any swap happens
        swapped = False
        for j in range(n - 1 - i):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
                swapped = True
        if not swapped:  # No swap means list is already sorted
            break
    return lst

data = [19, 2, 31, 45, 6, 11, 121, 27]
print(bubble_sort(data))
```
This snippet repeatedly passes through the list until no swaps are needed, ensuring a sorted output [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

---

## Selection Sort

**Explanation:**  
Selection Sort divides the list into a sorted and an unsorted part. In each iteration, the smallest (or largest, if sorting in descending order) element is selected from the unsorted part and swapped with the first unsorted element. Although simple to understand, its performance is also O(n²) for most cases [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Algorithms: A Comprehensive Guide for Beginner ...](https://www.computersciencecafe.com/44-sorting-algorithms.html).

**Example:**  
```python
def selection_sort(lst):
    for i in range(len(lst)):
        min_idx = i
        for j in range(i + 1, len(lst)):
            if lst[j] < lst[min_idx]:
                min_idx = j
        lst[i], lst[min_idx] = lst[min_idx], lst[i]
    return lst

data = [19, 2, 31, 45, 30, 11, 121, 27]
print(selection_sort(data))
```
Each iteration finds the minimum element among the remaining unsorted values and moves it to the correct position [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

---

## Insertion Sort

**Explanation:**  
Insertion Sort builds the sorted list one element at a time. It takes each new item and “inserts” it into the already sorted part of the list at the correct position. This algorithm works efficiently for small or nearly sorted lists, with an average and worst-case time complexity of O(n²), though it has a best-case complexity of O(n) [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

**Example:**  
```python
def insertion_sort(lst):
    for i in range(1, len(lst)):
        key = lst[i]
        j = i - 1
        while j >= 0 and lst[j] > key:
            lst[j + 1] = lst[j]
            j -= 1
        lst[j + 1] = key
    return lst

data = [19, 2, 31, 45, 30, 11, 121, 27]
print(insertion_sort(data))
```
Here, the key element is compared with all preceding elements and inserted in its correct position [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

---

## Merge Sort

**Explanation:**  
Merge Sort is a Divide and Conquer algorithm that splits the list into halves, recursively sorts each half, and then merges the sorted halves into one sorted list. This approach has a time complexity of O(n log n) and is well-suited for large datasets [Sorting Algorithms in Python](https://realpython.com/sorting-algorithms-python/)[Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/). One of its strengths is its stability and predictable performance.

**Example:**  
```python
def merge_sort(lst):
    if len(lst) <= 1:
        return lst
    mid = len(lst) // 2
    left = merge_sort(lst[:mid])
    right = merge_sort(lst[mid:])
    return merge(left, right)

def merge(left, right):
    merged = []
    while left and right:
        if left[0] < right[0]:
            merged.append(left.pop(0))
        else:
            merged.append(right.pop(0))
    merged.extend(left or right)
    return merged

data = [64, 34, 25, 12, 22, 11, 90]
print(merge_sort(data))
```
This code splits the list recursively and then merges the sorted sublists using a helper function [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

---

## Quick Sort

**Explanation:**  
Quick Sort is another Divide and Conquer algorithm that selects a pivot element and partitions the list into elements less than the pivot and those greater. It recursively sorts the partitions. Quick Sort can perform very well on average with O(n log n) time, though its worst-case scenario is O(n²) if poor pivot choices are made [Sorting Algorithms in Python](https://realpython.com/sorting-algorithms-python/)[Python Sorting Algorithms](https://www.tutorialspoint.com/python_data_structure/python_sorting_algorithms.htm).  

**Example:**  
```python
def quick_sort(lst):
    if len(lst) <= 1:
        return lst
    pivot = lst[len(lst) // 2]
    left = [x for x in lst if x < pivot]
    middle = [x for x in lst if x == pivot]
    right = [x for x in lst if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

data = [19, 2, 31, 45, 30, 11, 121, 27]
print(quick_sort(data))
```
Partitions are created using list comprehensions and then concatenated into a sorted list [Sorting Algorithms in Python](https://realpython.com/sorting-algorithms-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

---

## Heap Sort

**Explanation:**  
Heap Sort uses a binary heap data structure to sort elements. The algorithm first builds a max heap from the list and then repeatedly extracts the maximum element to build the sorted list. Heap Sort has an O(n log n) time complexity and is useful when you have memory constraints since it sorts in place [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Techniques — Python 3.13.3 documentation](https://docs.python.org/3/howto/sorting.html).

**Example:**  
```python
import heapq

def heap_sort(lst):
    heapq.heapify(lst)
    return [heapq.heappop(lst) for _ in range(len(lst))]

data = [19, 2, 31, 45, 30, 11, 121, 27]
print(heap_sort(data))
```
This example converts the list into a heap and then pops elements one by one, resulting in a sorted list [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Techniques — Python 3.13.3 documentation](https://docs.python.org/3/howto/sorting.html).

---

## Counting Sort (and Other Non-Comparison Based Sorts)

**Explanation:**  
Counting Sort is an efficient algorithm when the range of input data (keys) is not significantly larger than the number of elements. It counts the frequency of each value and then calculates positions for each key. Counting Sort runs in O(n + k) time, where k is the range of the input, making it faster under certain conditions [Sorting Algorithms in Python](https://realpython.com/sorting-algorithms-python/)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

**Example (Outline):**  
While explicit example code isn't provided here, the approach involves:
1. Finding the maximum value in the list.
2. Creating a count array of size (max + 1).
3. Counting the occurrences and then constructing the sorted list based on cumulative counts.

Other non-comparison sorts such as **Radix Sort** and **Bucket Sort** build on similar strategies and are particularly useful for specific types of numerical data [Sorting Algorithms in Python](https://realpython.com/sorting-algorithms-python/)[Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/).

---

## Tim Sort

**Explanation:**  
Tim Sort is a hybrid algorithm derived from merge sort and insertion sort. It is optimized for real-world data and is the default sorting algorithm in Python’s `sort()` and `sorted()` functions. Tim Sort adapts well to partially sorted data sets and guarantees an O(n log n) worst-case performance [Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/)[Sorting Techniques — Python 3.13.3 documentation](https://docs.python.org/3/howto/sorting.html).

**Usage Example:**  
Since Tim Sort is built into Python, you can simply sort any list with:
```python
data = [19, 2, 31, 45, 30, 11, 121, 27]
sorted_data = sorted(data)
print(sorted_data)
```
This built-in sort leverages Tim Sort internally ensuring efficient sorting for general use cases [Sorting Techniques — Python 3.13.3 documentation](https://docs.python.org/3/howto/sorting.html).

---

## Additional Resources

- **In-depth Tutorials:**  
  Detailed step-by-step articles on sorting are provided by websites such as GeeksforGeeks and Real Python which cover implementation details for each algorithm [Sorting Algorithms in Python](https://realpython.com/sorting-algorithms-python/)[Sorting Algorithms in Python](https://www.geeksforgeeks.org/sorting-algorithms-in-python/).

- **Official Documentation:**  
  The [Python documentation on sorting techniques](https://docs.python.org/3/howto/sorting.html) covers key functions, stability, and various sorting idioms like Decorate-Sort-Undecorate [Sorting Techniques — Python 3.13.3 documentation](https://docs.python.org/3/howto/sorting.html).

- **Interactive Learning:**  
  Platforms like Codecademy and freeCodeCamp offer exercises and projects on sorting algorithms in Python, giving you a chance to implement and test the code yourself [Learn Sorting Algorithms with Python](https://www.codecademy.com/learn/sorting-algorithms)[Sorting Algorithms Explained with Examples in JavaScript, ...](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/).

- **Practice Exercises:**  
  W3resource and other similar websites provide numerous exercises on search and sorting, which are useful for interview preparation and reinforcing your learning [Python: Search and Sorting - Exercises, Practice, Solution](https://www.w3resource.com/python-exercises/data-structures-and-algorithms/).

---
