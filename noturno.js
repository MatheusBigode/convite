let body = document.getElementById("body")

let day = document.getElementById("day")

let night = document.getElementById("night")

function Noturno () {


   body.style.backgroundColor = 'black';
   body.style.color = 'white';

   night.style.visibility = "hidden";
   day.style.visibility = "visible";
   
}

function Diurno () {
    body.style.backgroundColor = 'pink';
    body.style.color = 'black';
 
    night.style.visibility = "visible";
    day.style.visibility = "hidden";
}
