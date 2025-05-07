# Insertion Sort

## Insertion Sort: Sorting by Building a Sorted Pile

Imagine you're building a new pile of toys, and you want this new pile to be perfectly sorted from smallest to largest as you build it. Insertion Sort is like sorting your toys by picking them up one by one from the messy pile and inserting them into the correct spot in your new, already-sorted pile.

**Think of it like this:**

1.  **Start with a Small Sorted Pile:** Imagine you take the very first toy from your messy pile and place it in a new spot. This single toy is now your "sorted pile" (a pile with one toy is always sorted!).

2.  **Pick the Next Toy:** Now, take the next toy from your *original messy pile*.

3.  **Find the Right Spot in the Sorted Pile:** Look at your already-sorted pile. You need to find where this new toy belongs so that your sorted pile remains sorted.
    *   Start comparing the new toy with the toys in your sorted pile, starting from the rightmost toy and moving towards the left.
    *   If the new toy is **smaller** than the toy you're looking at in the sorted pile, that means the toy you're looking at needs to move one spot to the right to make space for the new toy.
    *   Keep shifting toys to the right as long as the new toy is smaller than the toys you're comparing it to.

4.  **Insert the Toy:** Once you find a spot where the new toy is **larger than or equal to** the toy to its left (or you reach the beginning of the sorted pile), you insert the new toy into that empty spot.

5.  **Your Sorted Pile Grows:** Now your sorted pile is one toy bigger, and it's still perfectly sorted!

6.  **Repeat Until All Toys are Inserted:** You keep repeating steps 2, 3, and 4: picking the next unsorted toy and inserting it into the correct spot in your growing sorted pile.

When you run out of toys in the original messy pile, your new pile will be completely sorted!

**Why "Insertion"?** Because you are **inserting** each unsorted element into its correct position within the already-sorted portion of the list.

---

### Python Code for Insertion Sort

Here's the Insertion Sort algorithm written in Python:

```python
def insertion_sort(arr):
    # We start from the second element (index 1),
    # because the first element (index 0) is considered the initial "sorted pile"
    for i in range(1, len(arr)):
        # Pick the current element to be inserted
        current_item = arr[i]

        # This is the index of the last element in the already-sorted portion
        j = i - 1

        # Now, we compare the current_item with elements in the sorted portion
        # and shift elements to the right to make space
        # We continue as long as:
        #   1. We haven't reached the beginning of the list (j >= 0)
        #   2. The element we're looking at in the sorted portion is bigger than our current_item
        while j >= 0 and current_item < arr[j]:
            # Shift the element to the right
            arr[j + 1] = arr[j]
            # Move to the next element to the left in the sorted portion
            j -= 1

        # When the while loop finishes, we've found the correct spot
        # Insert the current_item into the empty spot
        arr[j + 1] = current_item

    # After going through all elements, the list is sorted
    return arr

# Let's try it with some numbers (our "toys")
my_numbers = [1, 4, 9, 2, 3, 0, 7]
sorted_numbers = insertion_sort(my_numbers)
print(sorted_numbers) # Output: [0, 1, 2, 3, 4, 7, 9]

# Another example
my_other_numbers = [5, 2, 8, 1, 9, 4]
sorted_other_numbers = insertion_sort(my_other_numbers)
print(sorted_other_numbers) # Output: [1, 2, 4, 5, 8, 9]
```

**How the Code Works (Simple Terms):**

1.  `def insertion_sort(arr):`: This defines a function called `insertion_sort` that takes a list `arr` as input.
2.  `for i in range(1, len(arr)):`: This is the **outer loop**. It starts from the second element (index 1) of the list and goes up to the end. Each iteration of this loop picks the next unsorted item to be inserted into the sorted portion.
3.  `current_item = arr[i]`: We store the value of the item we are currently trying to insert into the `current_item` variable.
4.  `j = i - 1`: We set `j` to the index of the last element in the *already-sorted* portion of the list.
5.  `while j >= 0 and current_item < arr[j]:`: This is the **inner loop**. It does the work of finding the correct spot for `current_item` and shifting elements.
    *   `j >= 0`: This condition makes sure we don't go past the beginning of the list.
    *   `current_item < arr[j]`: This condition checks if the `current_item` is smaller than the element we are currently looking at in the sorted portion (`arr[j]`).
6.  `arr[j + 1] = arr[j]`: If the `while` loop condition is true (the element `arr[j]` is bigger than `current_item`), we shift `arr[j]` one position to the right (`arr[j+1]`). This creates space for `current_item`.
7.  `j -= 1`: We move `j` one step to the left to compare `current_item` with the next element in the sorted portion.
8.  `arr[j + 1] = current_item`: When the `while` loop finishes, we have found the correct position for `current_item` (the space is at index `j + 1`), and we insert it there.

Insertion Sort is simple to understand and is efficient for small lists or lists that are already mostly sorted. However, it can be slower than Quick Sort for large, randomly ordered lists because it might need to shift many elements for each insertion.