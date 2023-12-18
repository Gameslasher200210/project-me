
function addTask(){
    let input = document.getElementById("task");
    let taskText = input.value.trim(); // Use .value to get the value of the input field and trim extra spaces
    if(taskText != ''){ 
        let task = document.createElement("p");
        task.textContent = taskText;
        
        let uncompletedTask = document.getElementById("uncompleted-tasks");
        uncompletedTask.appendChild(task);
        
        input.value = ''; 
    }
 
}
