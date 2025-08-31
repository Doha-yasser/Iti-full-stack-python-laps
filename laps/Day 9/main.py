def problem_1():
    str = input('Enter a string: ')
    count = 0
    for char in str :
        if char in 'aeiou':
            count += 1
    print(count)


def problem_2():
    u_input= (input('Enter length , width seperated with \',\'   : '))
    (length , start) = (u_input.strip().split(','))
    print(length , start)
    start = int(start)
    length = int(length)

    arr = []
    for i in range (start , length+start):
        arr.append(i)

    print(arr)



def problem_3():
    u_input = input('Enter 5 numbers seperated with comma (,): ')
    arr = [int(x.strip()) for x in u_input.split(',')]
    arr.sort()
    print(arr)
    arr.sort(reverse=True)
    print(arr)



def problem_4(num):
    if (num%3 == 0) and (num%5 == 0):
        print('FizzBuzz')
    elif(num%3 == 0):
        print('Fizz')
    elif(num%5 == 0):
        print('buzz')
    else :
        print('indivisible by 3 or 5')



def problem_5(word):
    reversed_word = word[::-1]
    # print(reversed_word)
    if word == reversed_word:
        return True
    else:
        return False


def problem_6(word):
    if(len(word) < 2):
        return word
    # word = (input('Enter a word: '))
    result = ''
    # isValid = True
    start = 0 
    end = 1
    while end < len(word):
        if word[end] > word[end-1]:
            end += 1
            continue
        sub_str = word[start: end]
        if len(sub_str) > len(result):
            result = sub_str
        start = end 
        end = start + 1
        return result
        # print(sub_str)

        # isValid = False



choice = '1'
while choice in '123456':
    print('1)problem 1 \n2)problem 2 \n3)problem 3 \n4)problem 4 \n5)problem 5 \n6)problem 6 \nelse to stop')
    choice = input('Enter your choice: ')

    if choice == '1':
        problem_1()
        print()
    elif choice == '2':
        problem_2()
        print()
    elif choice == '3':
        problem_3()
        print()
    elif choice == '4':
        num = int(input('Enter a number: '))
        problem_4(num)
        print()
    elif choice == '5':
        word = (input('Enter a word: '))
        print('palindrome' if problem_5(word.strip()) else 'not palindrome')
        print()
    elif choice == '6':
        word = (input('Enter a word: '))
        print(problem_6(word))
        print()