const clock = document.querySelector("h2 #clock");

function getClock() {
    const date = new Date(); // date 객체 생성
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// 새로고침시 setInterval은 1초 뒤에 실행되므로 바로 실행되게 
// 하기 위해 실행하자마자 한 번 호출해줌
getClock(); 
setInterval(getClock, 1000);