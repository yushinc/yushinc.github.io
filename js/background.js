const imageBox = document.querySelector("#imageBox");

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg" , "8.jpg", "9.jpg", "10.jpg"];

function changeImg() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    
    const bgImage = document.createElement("img"); // js에 image element 생성
    bgImage.src = `img/${chosenImage}`; // image.scr 설정
    
    imageBox.appendChild(bgImage); // html body에 추가
}

changeImg();
imageBox.addEventListener("click", changeImg)
imageBox.addEventListener("refresh", changeImg)

