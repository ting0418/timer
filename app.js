let interval;
let m_secondsDisplay = document.getElementById("m_seconds");
let secondsDisplay = document.getElementById("seconds");
let startTimer = document.getElementById("start");
let stopTimer = document.getElementById("stop");
let resetTimer = document.getElementById("reset");
let totalSeconds = 10 * 60;
let isRunning = false; //防止重複點擊
startTimer.onclick = () => {
  if (!isRunning) {
    interval = setInterval(timer, 1000);
    isRunning = true;
  }
};
stopTimer.onclick = () => {
  clearInterval(interval);
  isRunning = false;
};
resetTimer.onclick = () => {
  clearInterval(interval);
  totalSeconds = 10 * 60;
  updateDisplay();
  isRunning = false;
};
let timer = () => {
  if (totalSeconds < 0) {
    clearInterval(interval);
    alert("時間到！");
  } else {
    updateDisplay();
    totalSeconds--;
  }
};
let updateDisplay = () => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  m_secondsDisplay.innerHTML = formatTime(minutes);
  secondsDisplay.innerHTML = formatTime(seconds);
};
let formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
