const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // js에 image element 생성
bgImage.src = `img/${chosenImage}`; // image.scr 설정

document.body.appendChild(bgImage); // html body에 추가
