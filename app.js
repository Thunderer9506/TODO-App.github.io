const retrievedJson = localStorage.getItem("TODOList");
let tasks = JSON.parse(retrievedJson);
let numberofTask = 0
let todoList = document.querySelector(".todo-list")
const inputField = document.querySelector("input")
const filterButtons = document.querySelectorAll(".filters Button")
const clearCompleted = document.querySelector(".clear-completed")

renderTask()
itemsLeft()
function removeCompleted() {
    tasks = tasks.filter(ele => ele['completed'] == false)
    renderTask()
    itemsLeft()
    savetoLocalStorage()
}

function savetoLocalStorage(){
    let jsonString = JSON.stringify(tasks)
    localStorage.setItem("TODOList",jsonString)
}

function itemsLeft(){
    let itemleftPara = document.querySelector(".itemsLeft")
    numberofTask = tasks.length
    itemleftPara.innerHTML = `${numberofTask} items left`
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
            itemsLeft()
        })
    })
    savetoLocalStorage()
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

function renderActiveTasks(){
    let todoListHTML = ''
    todoList.innerHTML = todoListHTML
    tasks.forEach((ele) => {
        if (ele['completed'] == false){
            todoListHTML += `
            <li class="tasks">
                <div class="task">
                    <button class="toggle-completed ${ele['completed'] ? 'completed' : ''}" type="button"><img src="images/icon-check.svg"></button>
                    <p>${ele['task']}</p>
                </div>
                <button class="delete-todo" type="button"><img src="images/icon-cross.svg"></button>
            </li>
            `
        }
    })
    todoList.innerHTML = todoListHTML
    toggleButon()
    deleteButton()
}

function renderCompletedTasks(){
    let todoListHTML = ''
    todoList.innerHTML = todoListHTML
    tasks.forEach((ele) => {
        if (ele['completed'] == true){
            todoListHTML += `
            <li class="tasks">
                <div class="task">
                    <button class="toggle-completed ${ele['completed'] ? 'completed' : ''}" type="button"><img src="images/icon-check.svg"></button>
                    <p>${ele['task']}</p>
                </div>
                <button class="delete-todo" type="button"><img src="images/icon-cross.svg"></button>
            </li>
            `
        }
        
    })
    todoList.innerHTML = todoListHTML
    toggleButon()
    deleteButton()
}

inputField.addEventListener("keydown",(event) => {
    if (event.key == "Enter"){
        let newTask = {id:numberofTask,task:inputField.value,completed:false}
        tasks.push(newTask)
        renderTask()
        itemsLeft()
        savetoLocalStorage()
    }
})

Object.keys(filterButtons).forEach((key) =>{
    filterButtons[key].addEventListener("click",() =>{
        if (key == 2){
            filterButtons[0].classList.remove('active')
            filterButtons[1].classList.remove('active')
            filterButtons[2].classList.add('active')
            renderCompletedTasks()
        } else if (key == 1){
            filterButtons[0].classList.remove('active')
            filterButtons[1].classList.add('active')
            filterButtons[2].classList.remove('active')
            renderActiveTasks()
        } else{
            filterButtons[0].classList.add('active')
            filterButtons[1].classList.remove('active')
            filterButtons[2].classList.remove('active')
            renderTask()
        }
    })
})

clearCompleted.addEventListener("click", () => removeCompleted())