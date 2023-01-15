const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 함수에 argument가 있다면 이는 방금 일어난 이벤트의 정보를 저장한다.
function onLoginSubmit(event) {
    // .preventDefault() : EventListener의 첫 번째 argument 내부의 함수이다.
    // 특정 이벤트에 관한 브라우저의 기본동작을 막음 (submit의 기본동작: refresh)
    event.preventDefault(); 

    const username = loginInput.value;

    // 로그인 버튼 클릭 시 로그인 폼 hidden
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    
    // 로컬스토리지에 사용자 이름 저장
    localStorage.setItem(USERNAME_KEY, username);

    // 폼이 사라지고 hello와 username 출력
    paintGreetings(username);

}

// 이름과 메시지 출력
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬저장소에 저장된 사용자 이름 변수
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 유저네임이 없다면 form 보여줌
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    // submit 이벤트는 enter를 누르거나 submit 버튼을 클릭할 때 발생
    loginForm.addEventListener("submit", onLoginSubmit ); 
}
else { // 저장된 유저네임이 있다면 메시지 보여줌
    paintGreetings(savedUsername);
}