const API_KEY = "e3806d24e94386273bfe40417f67b80c";
const city = document.querySelector("#city");
const temp = document.querySelector("#temp")

function onGeoOk(position) {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url) 
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            temp.innerText = `${data.main.temp_max} / ${data.main.temp_min}`;
        }); 
    
    // fetch(url) : call the url 
}



function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 현 좌표 제공