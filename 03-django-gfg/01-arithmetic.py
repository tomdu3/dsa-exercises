"""
A person gets 5000 salary on 1st August 2020. The salary increases by 2000 every month. Find the salary that the person is ogoing to get on 1st August 2025.
"""


def arithmetic(years, salary, increase):
    """
    years: int - number of years
    salary: int - salary at the start of the month
    increase: int - salary increase per month
    """
    months = years * 12

    return salary + (increase * months)


print(arithmetic(5, 5000, 2000))
