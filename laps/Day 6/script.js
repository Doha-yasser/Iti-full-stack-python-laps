var isTrue = true;
while (isTrue) {
    choice = prompt(
        `        1)car obj(problem 1, 2)
         2)Return new obj(problem 3)
         3)merge two objects(problem 4)
         4)person obj (problem 5)
         5)sort arr of objects (problem 6)
         6)Max && Min && reversed (problem 7, 8)
         7)simple calculation (problem 9)
         8)user Data(problem 10)
         9)Guess number (problem 11)
         10)products_fun (problem 12)
         11)Date (problem 13, 14)
         12)phone (problem 15)
        `
    )

    if (choice == null) {
        isTrue = false;
        continue;
    }

    switch (choice) {
        case '1':
            car_obj();
            break;
        case '2':
            problem_3();
            break;
        case '3':
            problem_4();
            break;
        case '4':
            problem_5();
            break;
        case '5':
            sortArr();
            break;
        case '6':
            max_min_reversed();
            break;
        case '7':
            calc();
            break;
        case '8':
            userData();
            break;
        case '9':
            guessNum();
            break;
        case '10':
            products_fun();
            break;
        case '11':
            date_fun();
            break;
        case '12':
            phone_contact();
            break;

        default:
            alert("No match");
    }
}

// Create a JavaScript program to define an object representing a car with properties like
// brand, model, and year, and a method to display its details.

function car_obj(){
    let car = {
        brand: "BMW",
        model: 'Corolla',
        year: 2011,
        display: function () {
            console.log(
                `This car:
                brand: ${car.brand}
                model: ${car.model}
                year: ${car.year}`
            )
        }
    }

    console.log('hiiiii')

    var c = Object.create(car)
    c.year = 2010;
    c.display()
    console.log(c.brand)
    var details = function (obj) {
        for (prop in obj) {
            console.log(`${prop} : ${obj[prop]} `)
        }
    } 

    details(c)

}


function problem_3() {
    obj = {
        fname: 'omer',
        age: 20
    }
    
    var createNewObj = function (obj){
        var newObj = {}
        for (prop in obj) {
            newObj[obj[prop]] = prop;
        }
        return newObj;
    }
    console.log(createNewObj(obj))
}


function problem_4(){
    var obj1 = {
        fname: 'Hoda',
        year: 2004
    }

    var obj2 = {
        lname: 'wael',
        year: 2006
    }

    var merge = function (obj1, obj2) {
        var new_obj = {...obj1};
        console.log(new_obj);
        for (prop in obj2) {
            // console.log(new_obj[prop])
            // console.log(obj2[prop])

            new_obj[prop] = obj2[prop]
        }
        return new_obj;
    } 

    console.log(`after obj2:`, merge(obj1, obj2));
}



function problem_5 (){
    var person = {
        address: {
            street: '123',
            government: 'Giza'
        },
        job: 'Eng',
        display: function () {
            console.log(`Adrees : ${this.address.street} ${this.address.government}\n Job: ${this.job}`)
        }
    }

    person.display()
}


function sortArr() {

    let arr = []
    let ages = [23 , 12, 21]
    for (var i = 0; i < 3; i++){
        var p = {
            job: 'Eng',
            name: 'Asmaa',
            age: ages[i]
        }
        arr.push(p)
    }
    console.log(...arr)
    arr.sort(function(a, b){return a.age - b.age})
    console.log(`after sorting : ` , ...arr)
}


function max_min_reversed (){
    let numbers = [1, 4, 8, 2, 0]
    console.log(`arr: `, numbers)
    console.log(`max: `, Math.max(...numbers))
    console.log(`min: `, Math.min(...numbers))

    let reversed = []
    for (var i = 0; i < 5; i++){
        reversed.push(numbers.pop())
    }
    console.log(reversed)

}



function calc(){
    var x = Number(prompt('Enter a num1 : '))
    valid = true
    var oper;
    do {
        oper = (prompt('Enter an operation as string: (sum ,multi ,subtract ,division)'))
        if (oper == null) {
            return;
        }
        if (oper != 'sum' && oper != 'multi' && oper != 'subtract' && oper != 'division') {
            valid = false;
            al = alert('Enter a valid choice!!!!')
            
        }
        oper = oper.toLowerCase()
    } while (!valid)
    var y = Number(prompt('Enter a num2 : '))
    var result;

    if (oper == 'sum') {
        result = x + y;
    }
    else if (oper == 'multi') {
        result = x * y;
    }
    else if (oper == 'subtract') {
        result = x - y;
    }
    else {
        result = x / y;
    }

    return alert(`result : ${result}`);
}





function userData (){
    let userName = prompt('Enter the user name: ');
    let userPass = prompt('Enter the password: ');

    console.log(`userName : admin && userPass : 421$$'`)
    if (userName != 'admin' && userPass != '421$$') {
        alert('All are wrong')
    }
    else if (userName != 'admin') {
        alert('user name is wrong')
    }
    else if (userPass != '421$$') {
        alert('password is wrong')
    }
    else {
        alert('Welcome login success')
    }

}





function guessNum(){
    var n = Math.floor(Math.random() * 10);
    console.log(n);

    while (true) {
        var guess = prompt('Guess a number from 0 to 9 : ')
        if (guess == n) {
            alert('guessed the correct number.')
        }
        else {
            alert('SORRY')
            if (confirm('Do you want to try again!!')) {
                continue;
            } else {
                return;
            }
        }
    }
    
}


// array of products
function products_fun (){
            
    product = {
        pName: '',
        price: 0,
        discountedPrice: 0,
        price_after_discount: 0
    }
    var productsArr = []
    for (var i = 0; i < 5; ++i){
        p = Object.create(product)
        p.pName = 'product'.concat(i+1)
        p.price = ((i + 1) * 10)
        p.discountedPrice = i * 5;
        p.price_after_discount = p.price - (p.discountedPrice * p.price)/100
        productsArr.push(p)

    }
    console.log(...productsArr)

}


function date_fun(){
    var date = prompt('Enter a birthdate like (DD – MM – YYYY)')
    function ifValid(date){
        if (date[2] != '-' || date[5] != '-') {
            alert('Wrong Date Format')
        }
        else {
            let year = date.substr(6);
            let month = date.substr(3,5);
            let day = date.substr(0,2);

            console.log(`Year: `, Number(year))
            console.log(`Month: `, Number(month-1))
            console.log(`Day: `,Number(day))
            
            if (Number(date.substr(0, 2)) > 31 || Number(date.substr(3, 5)) || Number(date.substr(6))) {
                console.log('Correct format but invalid date')
                return;
            }
                
            var date2 = new Date(year, month -1, day);
            alert(`You entered ${date2.toDateString()}`)
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            alert(`you was born on ${days[date2.getDay()]}`)
        }
    }
    ifValid(date)
}



function phone_contact (){
    let contacts = []
    let cont = {
        name: '',
        phone: '',
    }
    do {
        let oper = prompt('Enter the phone operation (add, search,full contacts)')
        oper = oper.toLowerCase()
        if (oper == 'add') {
            let newContact = Object.create(cont);
            newContact.name = prompt('Enter the name of contact: ')
            newContact.phone = prompt('Enter the phone number: ')
            contacts.push(newContact)
            alert('Added successfully')
        }
        else if (oper == 'search') {
            var search = prompt('What do u search for : ');
            alert( contacts.filter(c => { c.name == search || c.phone == search }))
            // for (c in contacts) {
            //     if (c.name == search || c.phone == search) {
            //         alert(`Result::\nName: ${c.name} && phone: ${c.phone}`)
            //     }
            //     else {
            //         alert('No matched')
            //     }
            // }
        }
        else if (oper == 'full contacts') {
            contacts.forEach(item => {console.log(item)})
            alert(contacts)
        }
        else {
            alert(`invalid choice`)
        }
    }while(confirm('Do you want another operation?'))
   
}

