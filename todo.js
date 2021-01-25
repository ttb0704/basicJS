const toDoContainer = document.querySelector(".todo");
const toDoForm = toDoContainer.querySelector(".js-todo");
const toDoInput = toDoContainer.querySelector("input");
const toDoList = toDoContainer.querySelector(".todo-list");

const todos_LS = "todos";
const todos =[];

function loadTodos(){
    const loadTodos = localStorage.getItem(todos_LS);
        
    if( loadTodos !== null){
        const parseTodos = JSON.parse(loadTodos);
        parseTodos.forEach(function(todo){
            console.log(todo);
        });
       
     }
}

function submitHandler(event){
    event.preventDefault();
    const todo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(todo);
}

function paintToDo(text){    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newID = todos.length+1;
    delBtn.innerText ="X";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDosObj={
        id:newID,
        text:text
    }        
    todos.push(JSON.stringify(toDosObj));
    localStorage.setItem(todos_LS,todos);
    
}



function init(){
    loadTodos();
    toDoForm.addEventListener("submit",submitHandler);
};
init();