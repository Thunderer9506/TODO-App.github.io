let tasks = document.getElementsByClassName("task")


Object.keys(tasks).forEach(key => {
    tasks[key]['children'][0].addEventListener("click", (element) => {
        let completeButton = tasks[key]['children'][0]
        let buttonImage = completeButton['children'][0]
        console.log(completeButton.classList[0]);
        
        if(completeButton.classList[0]){
            completeButton.classList.add('complete')
        } 
        
    })
    
});

