let hours = 0;
let minutes = 0;
let seconds = 0;
document.getElementById('demo').textContent = '00 : 00 : 00';
function start() {
  if (seconds < 59)
    seconds++;
  else {
    seconds = 0;
    if (minutes < 59)
      minutes++;
    else {
      minutes = 0;
      hours++;
    }
  }
  let showSeconds = seconds < 10 ? `0${seconds}`.slice(-2) : seconds;
  let showMinutes = minutes < 10 ? `0${minutes}`.slice(-2) : minutes;
  let showHours = hours < 10 ? `0${hours}`.slice(-2) : hours;
  document.getElementById('demo').textContent = `${showHours} : ${showMinutes} : ${showSeconds}`;


}

function reset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('demo').textContent = '00 : 00 : 00';
}


let startStopwatch;
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
  startStopwatch = setInterval(start, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(startStopwatch);
  stopButton.disabled = true;
  startButton.disabled = false;

});

resetButton.addEventListener('click', () => {
  reset();
  startButton.disabled = false;
  stopButton.disabled = false;
});