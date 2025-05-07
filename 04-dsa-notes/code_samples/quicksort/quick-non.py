def quick_sort(arr, first_element=0, last_element=-1):
    if last_element == -1:
        last_element = len(arr) - 1

    if first_element >= last_element:
        return arr  # Base case: sublist with 0 or 1 element is already sorted

    pivot = arr[last_element]  # Choose the last element as the pivot
    
    # Partition the array around the pivot
    i = first_element - 1  # Index of the smaller element
    for j in range(first_element, last_element):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]  # Swap elements

    arr[i + 1], arr[last_element] = arr[last_element], arr[i + 1]  # Place the pivot in its correct position
    
    # Recursively sort the two sub-arrays
    quick_sort(arr, first_element, i)  # Sort the left sub-array
    quick_sort(arr, i + 2, last_element)  # Sort the right sub-array

    return arr


print(quick_sort([1, 4, 9, 2, 3, 0, 7, 0,0,11,1,2,-10]))