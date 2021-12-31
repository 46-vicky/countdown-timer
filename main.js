const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
const dateEl = document.getElementById('inputbox')
const buttonEl = document.getElementById('btn')
    // window.userInput = '';



buttonEl.addEventListener("click", addtask);

function addtask() {
    // window.userInput = dateEl.value;
    countdown();
    setInterval(countdown, 1000);
}


//const birthday = "17 sep 2022";


function countdown() {
    const birthdayDate = new Date(dateEl.value);
    console.log(birthdayDate);
    const currentDate = new Date();


    const totalSeconds = (birthdayDate - currentDate) /
        1000;


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);


}

function formatTime(time) {
    return time < 10 ? (`0${ time }`) : time;
}
// countdown();
// setInterval(countdown, 1000);