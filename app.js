const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
let display = document.querySelector('.display-time');

let minutes = 0;
let seconds = 0;
let tenths = 0;
let isRunning = false;
let intervalId;

const startTimer = () => {
    if (!isRunning) {
        intervalId = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

const stopTimer = () => {
    clearInterval(intervalId);
    isRunning = false;
}

const resetTimer = () => {
    clearInterval(intervalId);
    isRunning = false;
    tenths = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

const updateDisplay = () => {
    tenths++;
    if (tenths === 100) {
        tenths = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    const displayString =
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds) + '.' +
        (tenths < 10 ? '0' + tenths : tenths);

    display.textContent = displayString;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
