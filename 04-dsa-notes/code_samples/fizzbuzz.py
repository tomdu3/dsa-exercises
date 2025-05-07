n = 20

for i in range(1,n+1):
    if not i % 3 == 0 and not i % 5 == 0:
        print(i, end='')
    if i % 3 == 0:
        print('fizz', end='')
    if i % 5 == 0:
        print('buzz', end='')
    print()