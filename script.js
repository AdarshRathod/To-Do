//Getting all required elements
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

//we will call this functio while adding, deleting  and checking-unchecking the task
function allTasks(){
    let tasks = document.querySelectorAll(".pending");

//if tasks length is 0 then pending num text content will be 0, if not then pending num  value will be task's length    
    pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.margin = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.margin = "0px";
    clearButton.style.pointerEvents = "none";
}

//add task while we put value in textarea and press enter 
inputField.addEventListener("keyup", (e) =>{
    let inputVal = inputField.value.trim();
    
//if enter button is clicked and input value length is greater than 0.
    if (e.key === "Enter" && inputVal.length > 0) {       
       let liTag = `<li class="list pending" onclick="handleStatus(this)">
       <input type="checkbox">
       <span class="task">${inputVal}</span>
       <i class="uil uil-trash" onclick="deleteTasks(this)"></i>
       </li>`;
       
    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    allTasks();
    }
});

//checking and unchecking the checkbox while we click on the task
function handleStatus(e){
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//deleting task while we click on delete icon.
function deleteTasks(e){
e.parentElement.remove(); //getting parent element and removing it
allTasks();
}

//deleting all task while we click on clear button
clearButton.addEventListener("click", () =>{
todoLists.innerHTML = "";
allTasks();
})
