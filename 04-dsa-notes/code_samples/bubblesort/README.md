# Bubble Sort

## Bubble Sort: Sorting by Swapping Neighbors

Imagine you have that a messy pile of toys, and you want to sort them from smallest to largest. Bubble Sort is a simpler way to do it compared to Quick Sort, but it can be a bit slower for really big piles.

**Think of it like this:**

1.  **Compare Neighbors:** You go through your pile of toys, but you only look at two toys right next to each other at a time.

2.  **Swap if They're Out of Order:** You compare the two neighbors:
    *   If the toy on the left is **bigger** than the toy on the right, they are in the wrong order! You swap them so the smaller one is on the left and the bigger one is on the right.
    *   If the toy on the left is **smaller** than or **equal to** the toy on the right, they are already in the correct order relative to each other, so you don't do anything.

3.  **Move to the Next Pair:** After you've compared and potentially swapped the first pair, you move to the next pair of toys (the second and third toys in the pile) and do the same comparison and swapping. You continue this process all the way to the end of the pile.

4.  **One Pass Done:** After you've gone through the entire pile, comparing and swapping neighbors from the beginning to the end, the largest toy in the pile will "bubble up" to the very end of the pile, just like a bubble rising to the surface of water. It's now in its correct sorted position!

5.  **Repeat the Process:** Now you repeat the whole process from step 1, but this time you don't need to look at the last toy (because it's already sorted). You go through the remaining unsorted part of the pile, comparing and swapping neighbors. The next largest toy will bubble up to the second-to-last position.

6.  **Keep Going:** You keep repeating this process, each time sorting one more toy and placing it in its correct position at the end of the unsorted part of the pile. You stop when you go through a whole pass without making any swaps – this means the pile is completely sorted!

**Why "Bubble"?** Because the largest unsorted element "bubbles up" to its correct position in each pass through the list.

**Here's the Python code:**

```python
def bubble_sort(arr):
    n = len(arr) # Get the number of toys in the pile

    # We need to go through the pile multiple times
    # The outer loop goes through the passes
    for i in range(n):
        # The inner loop compares and swaps neighboring toys
        # We subtract i because the last i elements are already in place
        # We subtract 1 because we compare arr[j] and arr[j+1]
        for j in range(0, n - i - 1):
            # Compare the current toy with the next toy
            if arr[j] > arr[j + 1]:
                # If the current toy is bigger than the next, swap them!
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    # After all the passes, the list is sorted
    return arr

# Let's try it with some numbers (our "toys")
my_numbers = [1, 4, 9, 2, 3, 0, 7]
sorted_numbers = bubble_sort(my_numbers)
print(sorted_numbers) # Output: [0, 1, 2, 3, 4, 7, 9]

my_other_numbers = [5, 2, 8, 1, 9, 4]
sorted_other_numbers = bubble_sort(my_other_numbers)
print(sorted_other_numbers) # Output: [1, 2, 4, 5, 8, 9]
```

**How the Code Works (Simple Terms):**

1.  `def bubble_sort(arr):`: This defines a function called `bubble_sort` that takes a list `arr` (our pile of toys) as input.
2.  `n = len(arr)`: We get the total number of items in the list and store it in `n`.
3.  `for i in range(n):`: This is the **outer loop**. It controls how many passes we make through the list. We need at most `n` passes to sort a list of `n` items.
4.  `for j in range(0, n - i - 1):`: This is the **inner loop**. It goes through the unsorted part of the list, comparing and swapping neighboring items.
    *   `n - i - 1`: We subtract `i` because the last `i` elements are already sorted and in their correct place. We subtract `1` because we are comparing `arr[j]` with `arr[j+1]`, so the last index we need to check is one less than the end of the unsorted part.
5.  `if arr[j] > arr[j + 1]:`: This is the comparison step. We check if the current item (`arr[j]`) is bigger than the next item (`arr[j + 1]`).
6.  `arr[j], arr[j + 1] = arr[j + 1], arr[j]`: If the current item is bigger, we swap the two items. This is how the "bubbling up" happens.
7.  `return arr`: After the outer loop finishes (meaning we've made enough passes), the list is sorted, and we return it.

Bubble Sort is easy to understand and implement, but it's generally slower than Quick Sort, especially for large lists. This is because it does a lot of comparisons and swaps, even when the list is almost sorted.

Let me know if you'd like to compare Bubble Sort and Quick Sort or learn about other sorting methods!