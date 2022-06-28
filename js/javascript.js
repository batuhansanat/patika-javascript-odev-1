let name = prompt("Adınızı girin")
let date = new Date();


let domName = document.querySelector('#name');
let domClock = document.querySelector('#clock');
let domDate = document.querySelector('#date');


domName.innerHTML = name + '!';
domDate.innerHTML = days[date.getDay()];

let days=["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

function Timer(){
let clock = new Date();
clock = clock.toLocaleTimeString();
domClock.innerHTML = clock;
setTimeout(Timer, 1000);
}

