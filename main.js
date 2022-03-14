//user inputs
//when + button is clicked item is added
//if user clicks delete button the item is deleted from the list
//if check button is clicked 

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

// console.log(document.getElementById("test").innerHTML)
// console.log(document.getElementById("test").textContent)
// document.getElementById("test").innerHTML=`<h1>Noona</h1>`
// document.getElementById("test").textConent=`<h1>Noona</h1>`


addButton.addEventListener("click",addTask);

function addTask(){
    let task = {
        id:randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let resultHtml = ``
    for(let i = 0; i<taskList.length;i++){
        if(taskList[i].isComplete ==true){
            resultHtml += `<div class="task task-done">
            <div class ="task-done">${taskList[i].taskContent}</div>
            <div>
              <button class="button_style" onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-arrow-rotate-left"></i></button>
              <button class="delete_button_style" onclick="deleteTask()"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>`;

        }else{
            resultHtml += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
              <button class="checked_button_style" onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
              <button class="delete_button_style" onclick="deleteTask()"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>`;
        }

    }
    document.getElementById("task-board").innerHTML = resultHtml;
}

function toggleComplete(id){
    console.log("id:", id)
    for(let i = 0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render()
    console.log(taskList)
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

function deleteTask(){
    console.log("Delete")
}