"""
A person saves one dollar first day, two dollars second day, three dollars third day, and so on.
After 10 days, how much money does the person have?
"""


def sum_of_naturals(n):
    """
    n: int - number of days
    """
    return sum(range(1, n + 1))


# Using Gauss's formula
def sum_of_naturals_gauss(n):
    return n * (n + 1) // 2


print(sum_of_naturals(10))
print(sum_of_naturals_gauss(10))
