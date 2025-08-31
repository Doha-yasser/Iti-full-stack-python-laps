var btn = document.getElementById('btn')
btn.addEventListener('click', fun => {
    fun.preventDefault();
    var u_name = document.getElementById('name').value;
    console.log(u_name)

    var pass = document.getElementById('pass').value;
    console.log(pass)

    if (u_name == 'admin' && pass == '123') {
        document.body.innerHTML = `<h1>Welcome</h1>`;
    } else {
        alert('not registered')
    }
})


// Q2: 
function mergeArr() {
    arr1 = []
    arr2 = []
    newArr = [];

    arr1_str = prompt('Enter array 1 items')
    arr2_str = prompt('Enter array 2 items')

    function getArr(str) {
        return str.split(',').map(Number)
    }

    arr1 = getArr(arr1_str);
    arr2 = getArr(arr2_str);

    

    console.log('original arrrays:')
    console.log(arr1)
    console.log(arr2)

    arr1.sort();
    arr2.sort();
    console.log('After sorting:')
    console.log(arr1)
    console.log(arr2)


    var i = 0, j = 0;
    
    while ( i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++;
        }
        else if (arr1[i] > arr2[j]){
            newArr.push(arr2[j])
            j++;
        }
        else {
            // if equal
            newArr.push(arr1[i])
            i++;
        }
        
        
    }
    while (i < arr1.length) newArr.push(arr1[i++]);
    while (j < arr2.length) newArr.push(arr2[j++]);

    console.log(new Set(newArr));

}



/***************************************************************** */


var all_tasks = document.getElementById('tasks')
// document.getElementById('add_task')
var tasks = [];
var taskInfo = {
    t_name: '',
    // true for done
    t_status: false
}

function handelDone(btn) {
    btn.parentElement.style.backgroundColor = 'lightGreen';
    btn.parentElement.style.color = 'green';
}

function handelDelete(btn) {
    btn.parentElement.remove();
}
function addTask() {
    var task_name = document.getElementById('task').value;
    var task = Object.assign({},taskInfo)
    task.t_name = task_name;
    tasks.push(task)
    console.log(tasks);

    all_tasks.innerHTML +=
        `<div class="task-item">
            <span class="task-name">${task_name}</span>
            <button class="done" onclick='handelDone(this)'>✔</button>
            <button class="delete" onclick='handelDelete(this)'>✘</button><br>
        </div>`
    
    document.getElementById('task').value = '';
}


