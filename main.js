//user inputs
//when + button is clicked item is added
//if user clicks delete button the item is deleted from the list
//if check button is clicked
let userInput = document.querySelector(".task-input");
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let selectedMenu = "all";
let filterList = [];

taskInput.addEventListener("keyup",function(event){
    if(event.keyCode ===13){
        addTask(event)
    }
})


// console.log(document.getElementById("test").innerHTML)
// console.log(document.getElementById("test").textContent)
// document.getElementById("test").innerHTML=`<h1>Noona</h1>`
// document.getElementById("test").textConent=`<h1>Noona</h1>`

// console.log(tabs)
for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}
addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let list = [];
  if (selectedMenu == "all") {
    list = taskList;
  } else if (selectedMenu == "ongoing" || selectedMenu == "done") {
    list = filterList;
  }
  let resultHtml = ``;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHtml += `<div class="task task-done">
            <div class ="task-done">${list[i].taskContent}</div>
            <div class ="button-box">
              <button class="button_style" onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-arrow-rotate-left"></i></button>
              <button class="delete_button_style" onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>`;
    } else {
      resultHtml += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div class ="button-box">
              <button class="checked_button_style" onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
              <button class="delete_button_style" onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHtml;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function deleteTask(id) {
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  filter();
}

function filter(e) {
  if(e){
      selectedMenu = e.target.id;
    document.getElementById("under-line").style.width =e.target.offsetWidth +"px"
    document.getElementById("under-line").style.top =e.target.offsetTop + e.target.offsetHeight +"px"
    document.getElementById("under-line").style.left =e.target.offsetLeft +"px"
  
  }


  filterList =[];
    if (selectedMenu == "ongoing") {
    //
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
  }
  else if(selectedMenu == "done"){
    for(let i =0; i<taskList.length;i++){
        if(taskList[i].isComplete == true)
            filterList.push(taskList[i])
    }
  }
  render();
}
