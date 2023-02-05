const today = document.querySelector("#today");
const date = new Date();

let month = date.getMonth();
const day = date.getDate();

if (month === 0) 
    month = "Jan";
else if (month === 1) 
    month = "Feb";
else if (month === 2) 
    month = "Mar";
else if (month === 3) 
    month = "Apr";
else if (month === 4) 
    month = "May";
else if (month === 5) 
    month = "June";
else if (month === 6) 
    month = "July";
else if (month === 7) 
    month = "Aug";
else if (month === 8) 
    month = "Sep";
else if (month === 9) 
    month = "Oct";
else if (month === 10) 
    month = "Nov";
else if (month === 11) 
    month = "Dec";

today.innerText = month + " " + day;