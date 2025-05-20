let tasks = [
    {id:1,task:"completed project",completed:false},
    {id:2,task:"learn something",completed:false},
    {id:3,task:"clean room",completed:false},
]
let todoList = document.querySelector(".todo-list")
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
/* <li class="tasks"> */
    // <div class="task">
        // <button class="toggle-completed" type="button"><img src="images/icon-check.svg"></button>
        // <p>Hello</p>
    // </div>
    // <button class="delete-todo" type="button"><img src="images/icon-cross.svg"></button>
// </li>



let completedTask = document.getElementsByClassName('toggle-completed')
Object.keys(completedTask).forEach((key) =>{
    completedTask[key].addEventListener("click",() =>{
        let ele = completedTask[key].classList
        if (!ele.contains('completed')){
            ele.add("completed")
        } else{
            ele.remove("completed")
        }
    })
})
