const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTIme(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hour < 10 ? `0${hour}`:hour}:${
        minutes < 10 ? `0${minutes}`:minutes}:${
        seconds < 10 ? `0${seconds}`:seconds}`;
    
}

function init(){
    getTIme();
    setInterval(getTIme, 1000);
}

init();