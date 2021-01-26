const clockContainer = document.querySelector(".clock");
const clock = clockContainer.querySelector("span");

function loadClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let time;

    // clock.innerText = `${hours} : ${minutes} : ${seconds}`;
    // `${hours<10?`0${hours}`:hours} : ${minutes<10?`0${minutes}`:minutes} : ${seconds<10?`0${seconds}`:seconds}`;
    time = `${hours<10?`0${hours}`:hours}:`;
    time += `${minutes<10?`0${minutes}`:minutes}:`;
    time += `${seconds<10?`0${seconds}`:seconds}`;
    //console.log(time);
    clock.innerText = time;
    }


function init(){
    setInterval(loadClock,1000);
}
init();