def sum(values):
    # print(values)
    result = values[0]
    for i in (values):
        result += i

    return result


def subtract(values):
    result = values[0]
    for i in range(len(values)-1):
        result -= values[i+1]

    return result


def multiply(values):
    result = values[0]
    for i in range(len(values) - 1):
        result *= values[i + 1]

    return result


def divide(values):
    result = values[0]
    for i in range(len(values) - 1):
        result /= values[i + 1]

    return result