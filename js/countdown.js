const remain = document.querySelector("#remain");
const inputDate = document.querySelector("#inputDate");


function toDate(event) {

  
  const today = new Date();
  const toGoal = inputDate.valueAsNumber;

  const remainTime = toGoal - today.getTime();

  const days = String(Math.floor(remainTime / (1000 * 60 * 60 * 24)));
  const hours = String(
    Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((remainTime % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  if (days === "NaN" || hours === "NaN" || minutes === "NaN" || seconds === "NaN") {
    remain.innerText = "00d 00h 00m 00s";
  }
  else {
    remain.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}


toDate();
inputDate.addEventListener("submit", setInterval(toDate, 1000));

