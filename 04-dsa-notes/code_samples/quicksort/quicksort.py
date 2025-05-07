# Rules for quicksort
# 1. Pick an element, call it pivot (usually the last element)
# 2. Partition the array around the pivot (all elements less than the pivot go to the left, all elements greater than the pivot go to the right)
# 3. Recursively sort the left and right partitions
# 4. Concatenate the left and right partitions

test_array = sorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], reverse=True)
print(f'Unsorted: {test_array}')

def quick_sort(array):
    if len(array) <= 1:
        return array
    else:
        pivot = array[-1]
    left = []
    right = []
    for element in array:
        if element < pivot:
            left.append(element)
        elif element > pivot:
            right.append(element)
    return quick_sort(left) + [pivot] + quick_sort(right)

print(f'Sorted: {quick_sort(test_array)}')

