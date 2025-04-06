"""
You are given a number a and you have to print your answer according to the following:

If the number is divisible by 3, you print "Fizz" (without quotes)
If the number is divisible by 5, you print "Buzz" (without quotes)
If the number is divisible by both 3 and 5, you print "FizzBuzz" (without quotes)
In any other case, you print the number itself
"""

a = int(input())

fizzbuzz = {3: "Fizz", 5: "Buzz"}
not_fizzbuzz = True
for num in fizzbuzz:
    if a % num == 0:
        not_fizzbuzz = False
        print(fizzbuzz[num], end="")
print(a if not_fizzbuzz else "")
