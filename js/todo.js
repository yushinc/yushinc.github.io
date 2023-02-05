
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
 
const TODOS_KEY = "toDos";

let toDos = [];  // toDo를 생성할 때마다 배열에 push

// save todo array in localStorage
function saveToDos() {
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
    // localStorage can save only string type, not array type 
    // so we are using JSON.stringify()
    // JSON.stringify(type except string) : can change object, array.. anything to string
    // JSON.parse(string) : can change string to array
}

// delete todo
function deleteToDo(event) { 
    // event는 직전 일어난 event의 property를 가지고 있음 
    // -> 어떤 element에서 event가 발생하였는지 알 수 있음
    // -> event.target은 선택된 element의 property를 가지고있음
    // -> event.target.parentElement를 통해 선택된 element의 부모를 알 수 있음

    const li = event.target.parentElement.parentElement;

    li.remove();

    // array.filter(function) : function에서 array의 각 원소가 true면 포함 / false면 제외 하여 새로운 배열을 생성
    // 사용자가 클릭한 todo의 id와 다르다면 true / 같으면 fasle 리턴하여 클릭한 todo를 제외한 배열 새로 생성
    // toDo.id (integer), li.id (string) type을 같게 해주어야 비교가능
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(); // 삭제 후 localStorage에 업데이트
}

// paint todo
function paintToDo(newTodo) { // newTodo(object type)

    const div = document.createElement("div");
    const li = document.createElement("li"); 
    li.id = newTodo.id; // id를 html에 추가

    const span = document.createElement("span");

    span.innerText = newTodo.text; // li의 자식인 span의 텍스트를 사용자가 입력한 todo로 변경

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);


    div.appendChild(button); // li의 자식으로 delete button 추가
    div.appendChild(span); // li의 자식으로 span 추가

    li.appendChild(div);
    toDoList.appendChild(li); // html list에 생성한 li 추가
}

// add todo
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // 삭제한 todo 구별하기 위해
    };

    toDos.push(newTodoObj); // 배열에 추가
    paintToDo(newTodoObj);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) { // savedToDos !== null
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // const toDos = []; 로 새로고침할 때 마다 생성하면 이전에 저장된 toDo들은 사라진다.
    // let toDos = []; 로 변경가능한 let 타입으로 생성하고 저장된 toDo가 존재한다면 업데이트 후 paintToDo한다.

    parsedToDos.forEach(paintToDo); // todo배열의 원소마다 paintToDo 함수 실행
}

