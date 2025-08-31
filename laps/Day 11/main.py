
import re
import Calculator.my_functions as c
def fun1(pattern,string):
    for char in string:
        # print(char)
        if(re.search(char,pattern) is None):
            print('The difference char is ' + char)
# fun1('eueiieo','iieoedue')


# Write a function that accepts a number as a parameter. The function should return a number that’s the difference
# between the largest and smallest numbers that the digits can form in the number.
#  ○ For example, if the parameter is “213”, the function should return “198”, which is the result of 123
# subtracted from 321.

def fun2(num):
    try:
        new_num = [(x) for x in num]
        print(new_num)
        max_num = ''
        for i in range(len(new_num)):
            max_num += max(new_num)
            # print(max_num)
            new_num.remove(max(new_num))
        min_num = max_num[::-1]
        result = int(max_num) - int(min_num)
        return f'max: {max_num} , min: {min_num}   so result is {result}'
    except ValueError:
        print('Value error')







def readFromFile():
    with open('text.txt' , 'r') as f:
        lines = []
        for line in f:
            lines.append(line.strip())
    print(lines)


def WriteIntoFile():
    with open('write.txt' , 'w') as f:
        lines = ['Doha Yasser' , '20231089' , 'Hoda Wael', 'Shams Adel']
        for line in lines:
            f.write(line + '\n')




choice = '1'
while choice in '123456':
    print('1)2 strings problem \n2)problem 2 \n3)Read from file \n4)write into file \n5) Calculator package\nelse to stop')
    choice = input('Enter your choice: ')

    if choice == '1':
        pattern = input('Enter first string: ')
        string = input('Enter second string: ')
        fun1(pattern,string)
        print()
    elif choice == '2':
        num = input('Enter a number: ')
        print(fun2(num))
        print()
    elif choice == '3':
        readFromFile()
        print()
    elif choice == '4':
        WriteIntoFile()
        print('added to file successfully')
        print()
    elif choice == '5':
        u_input = input('Enter the numbers seperated with \' \' to do operations: ').strip().split(' ')
        # print(u_input)
        numbers = [int(x) for x in u_input if not x == ' ']
        # print(numbers)
        print('1)+ \n2)- (if you entered more than 2 numbers u will get the first - athers) \n3)p* \n4)/ (like -) \n')
        ch = input('Enter the operation(1,2,3,4): ')
        if(ch == '1'):
            print(c.sum(numbers))
        elif (ch == '2'):
            if len(numbers) == 2:
                try:
                    if (numbers[0] == 0) or (numbers[1] == 0):
                        raise ValueError
                    print(c.subtract(numbers))
                except ValueError:
                    print('subtracting zero from Number\n\n')
        elif (ch == '3'):
            if len(numbers) == 2:
                try:
                    if (numbers[0] == 0) or (numbers[1] == 0):
                        raise ValueError
                    print(c.multiply(numbers))
                except ValueError:
                    print('Multiply with Zero\n\n')

        elif (ch == '4'):
            if len(numbers) == 2:
                try:
                    if (numbers[0] == 0) or(numbers[1] == 0):
                        raise ZeroDivisionError
                    print(c.divide(numbers))
                except ZeroDivisionError:
                    print('can’t divide with zero\n\n')
        else:
            print('Invalid choice')
            print()


