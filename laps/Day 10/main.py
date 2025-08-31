def Range(num):
    # in range(-5,5)
    return True if (num >= -5 and num <= 5) else False


def problem_2(arr1 , arr2):
    dic = {}
    for i in range(min(len(arr1), len(arr2))):
        dic[arr1[i]] = arr2[i]
    # return dic

    # zip return zip object
    return dict(zip(arr1,arr2))


def problem_3():
    list = []
    for i in range(30):
        list.append(i**2)

    return list

def problem_4(nums):
    list = nums
    list.pop()
    print('After pop: ', list)
    list[1] = 'R'
    print('After adding \'R\': ', list)
    item = input('Enter an item to delete : ')
    item = int(item) if (item.isdigit()) else item

    list.remove(item) if item in list else print('Not found')
    return list


def problem_5():
    print('first dic..... ')
    keys_1 = (input('Enter a dictionary keys seperated by comma \' ,\' : ')).split(',')
    values_1 = input('Enter a dictionary values: ').split(',')

    print('second dic.... ')
    keys_2 = (input('Enter a dictionary keys seperated by comma \' ,\' : ')).split(',')
    values_2 = input('Enter a dictionary values: ').split(',')

    dic1 = dict(zip(keys_1, values_1))
    dic2 = dict(zip(keys_2, values_2))
    dic3 = {**dic1, **dic2}

    return dic1.update(dic2)

    return (dic3)




# choice = '1'
# while choice in '12345':
#     print('1)problem 1 \n2)problem 2 \n3)problem 3 \n4)problem 4 \n5)problem 5 \nelse to stop')
#     choice = input('Enter your choice: ')

    if choice == '1':
        print(Range(int(input('Enter a number: '))))
        print()
    elif choice == '2':
        arr1 = input('Enter list 1 items seperated with ,  : ').split(',')
        arr2 = input('Enter list 2 items seperated with ,  : ').split(',')

        print(problem_2(arr1, arr2))
        print()
    elif choice == '3':
        print(problem_3())
        print()
    elif choice == '4':
        u_input = input('Enter 5 numbers seperated by comma \' ,\' : ')
        nums = [int(x.strip() )for x in u_input.split(',')]
        print(problem_4(nums))
        print()
    elif choice == '5':

        print(problem_5())






try:
    number = int(input('Enter a number: '))
    if number %2 == 0:
        print(1/number)
except ZeroDivisionError :
    print('Can not divide into zero' )
except ValueError :
    print('only numbers allowed' + ValueError)
else:
    if number %2 == 1:
        print('only even numbers allowed')

finally:
    print('End program')
