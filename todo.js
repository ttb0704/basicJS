const toDoContainer = document.querySelector(".todo");
const toDoForm = toDoContainer.querySelector(".js-todo");
const toDoInput = toDoContainer.querySelector("input");
const toDoList = toDoContainer.querySelector(".todo-list");

const todos_LS = "todos";
var todos =[];

function loadTodos(){
    const loadTodos = localStorage.getItem(todos_LS);
    console.log( loadTodos );
    console.log( JSON.parse(loadTodos) );
    if( loadTodos != null ){
        const parseTodos = JSON.parse(loadTodos);
        parseTodos.forEach(function(todo){
            paintToDo(todo.text);
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
    li.appendChild(span);
    li.appendChild(delBtn);    
    li.id=newID;
    toDoList.appendChild(li);
    const toDosObj={
        id:newID,
        text:text
    }        
    todos.push(toDosObj);
    saveLS()
    delBtn.addEventListener("click",deleteTodo);
    
}

function deleteTodo(event){
    var todo = event.target.parentNode;
    var todoID = todo.id;
    //console.log("a"+ todoID);
    //todos.forEach( function(e){
    //    console.log("b"+e.id) 
    //});
    const clearTodos = todos.filter(function(todo){
        return todo.id != parseInt(todoID);
    });
    todos = clearTodos;
    saveLS()
    todo.remove();
}

function saveLS(){
    localStorage.setItem(todos_LS,JSON.stringify(todos));
}


function init(){
    loadTodos();
    toDoForm.addEventListener("submit",submitHandler);
};
init();