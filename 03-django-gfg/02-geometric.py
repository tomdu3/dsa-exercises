"""
A person gets 5000 as salaryu on 1st Jan 2020. The salary doubles every year. Find the salary that the person will get on 1st Jan 2030.
"""


def geometric(years, salary, increase):
    return salary * increase ** (years - 1)


print(geometric(11, 5000, 2))
