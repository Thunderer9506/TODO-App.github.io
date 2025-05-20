let tasks = []
let numberofTask = 0
let todoList = document.querySelector(".todo-list")
const inputField = document.querySelector("input")

function itemsLeft(value){
    let itemleftPara = document.querySelector(".itemsLeft")
    itemleftPara.innerHTML = `${value} items left`
}

function toggleButon(){
    let completedTask = document.querySelectorAll('.task button')

    Object.keys(completedTask).forEach((key) =>{
        completedTask[key].addEventListener("click",() =>{
            let ele = completedTask[key].classList
            if (!ele.contains('completed')){
                ele.add("completed")
                tasks[key]['completed'] = true
            } else{
                ele.remove("completed")
                tasks[key]['completed'] = false
            }
        })
    })
}

function deleteButton() {
    let deleteTask = document.querySelectorAll(".delete-todo")
    Object.keys(deleteTask).forEach((key) =>{
        deleteTask[key].addEventListener("click",() =>{
            tasks.splice(key,1)
            renderTask()
        })
    })
}

function renderTask() {
    let todoListHTML = ''
    tasks.forEach((ele) => {
        todoListHTML += `
        <li class="tasks">
            <div class="task">
                <button class="toggle-completed ${ele['completed'] ? 'completed' : ''}" type="button"><img src="images/icon-check.svg"></button>
                <p>${ele['task']}</p>
            </div>
            <button class="delete-todo" type="button"><img src="images/icon-cross.svg"></button>
        </li>
        `
    })
    todoList.innerHTML = todoListHTML
    toggleButon()
    deleteButton()
}


inputField.addEventListener("keydown",(event) => {
    if (event.key == "Enter"){
        let newTask = {id:numberofTask,task:inputField.value,completed:false}
        numberofTask += 1
        tasks.push(newTask)
        renderTask()
        itemsLeft(numberofTask)
    }
})

