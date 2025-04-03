"""
Find the last digit of a number
"""


def last_digit(number):
    """
    Find the last digit of a number
    """
    if number < 0:
        number = -number
    return number % 10


print(f"last_digit(123) = {last_digit(123)}")
print(f"last_digit(-1234) = {last_digit(-1234)}")
