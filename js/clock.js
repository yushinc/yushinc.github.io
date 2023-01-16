const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // date 객체 생성

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds= String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 새로고침시 setInterval은 1초 뒤에 실행되므로 바로 실행되게 
// 하기 위해 실행하자마자 한 번 호출해줌
getClock(); 
setInterval(getClock, 1000); // 1초마다 getClock() 실행

