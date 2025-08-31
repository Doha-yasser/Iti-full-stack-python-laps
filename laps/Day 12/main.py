queues = []


def getQueue(name):
    for i in queues:
        if isinstance(i, Queue2):
            if i.showName() == name:
                return i


class Queue():
    def __init__(self):
        self.arr = []
        queues.append(self)
    def insert(self,value):
        return self.arr.append(value)
    def show(self):
        return self.arr
    def is_empty(self):
        return True if len(self.arr) == 0 else False
    def pop(self):
        return 'Empty queue' if self.is_empty() else f'{self.arr.pop()} is popped successfully'

    @classmethod
    def save(cls):
        with open('file.txt', 'w') as f:
            for q in queues:
                if isinstance(q, Queue2):
                    f.write(f'{q.showName()} -> {q.show()}\n')
                else:
                    f.write(f'Queue -> {q.show()}\n')

            return print('Added to file successfully')


    @classmethod
    def load(cls):
        with open('file.txt', 'r') as f:
            for q in f:
                print(q)

class Queue2(Queue):
    def __init__(self,name = '', size = 1):
        super().__init__()
        self.name = name
        self.size = size
        queues.append(self)
    def showName(self):
        return self.name
    def insert(self , value):
        try:
            if len(self.arr) < self.size :
                self.arr.append(value)
            else :
                raise Exception
        except Exception:
            print('Out of range')
        return print(self.arr)







queue = Queue()
print(queue.is_empty())
print(queue.pop())

queue.insert(8)

print(queue.show())
print(queue.pop())
print(queue.show())

# q2 = Queue2()
q2 = Queue2('Ali',2)
queues.append(q2)

# q2.name = 'Ali'
# q2.size = 3
print(q2.showName())
q2.insert(5)
q2.insert(2)
q2.insert(6)


print(getQueue('Ali').show())
q3 = Queue2('Alaa')
q3.insert(9)
print(getQueue('Alaa').show())


queue.save()
q2.save()
q3.save()


queue.load()





