"""
Given two integers d and n, where d is the day, out of 7 days of the week, d varies from 0 to 6 as shown below.

0 - Sunday
1 - Monday
2 - Tuesday
3 - Wednesday
4 - Thursday
5 - Friday
6 - Saturday

Return the number of days in the range [d, d + n] that are part of the week.

Example 1:

Input: d = 0, n = 3
Output: 2
Explanation: The days from Sunday to Wednesday are part of the week.

Example 2:

Input: d = 2, n = 3
Output: 1
Explanation: The days from Monday to Wednesday are part of the week.

Example 3:

Input: d = 0, n = 1
Output: 1
Explanation: The day Sunday is part of the week.

Example 4:

Input: d = 3, n = 2
Output: 3
Explanation: The days from Wednesday to Friday are part of the week.

Constraints:

1 <= d, n <= 6
d and n are integers.
"""

days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


def day_before_n_days(d, n):
    first = d
    last = (d - n + 7) % 7

    return f"{days[first], first} - {days[last], last}"


print(day_before_n_days(0, 3))
print(day_before_n_days(2, 3))
print(day_before_n_days(0, 1))
print(day_before_n_days(3, 2))

print(day_before_n_days(4, 3))
print(day_before_n_days(2, 19))
