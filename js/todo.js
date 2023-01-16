const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
 
const toDos = [];

// save todo in localStorage
function saveToDos() {
    localStorage.setItem("todos" , JSON.stringify(toDos));
}

// delete todo
function deleteToDo(event) { 
    // event는 직전 일어난 event의 property를 가지고 있음 
    // -> 어떤 element에서 event가 발생하였는지 알 수 있음
    // -> event.target은 선택된 element의 property를 가지고있음
    // -> event.target.parentElement를 통해 선택된 element의 부모를 알 수 있음

    const li = event.target.parentElement;
    li.remove();
}

// paint todo
function paintToDo(newTodo) {
    const li = document.createElement("li"); 
    const span = document.createElement("span");

    span.innerText = newTodo; // li의 자식인 span의 텍스트를 사용자가 입력한 todo로 변경

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li의 자식으로 span 추가
    li.appendChild(button); // li의 자식으로 delete button 추가

    toDoList.appendChild(li); // html list에 생성한 li 추가
}

// add todo
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    toDos.push(newTodo);
    paintToDo(newTodo);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);