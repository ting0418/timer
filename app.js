let interval;
let h_secondsDisplay = document.getElementById("h_seconds");
let m_secondsDisplay = document.getElementById("m_seconds");
let secondsDisplay = document.getElementById("seconds");
let inputMinutes = document.getElementById("inputMinutes");
let setTimeButton = document.getElementById("setTime");
let startTimer = document.getElementById("start");
let stopTimer = document.getElementById("stop");
let resetTimer = document.getElementById("reset");
let totalSeconds = 10 * 60;
let isRunning = false; //防止重複點擊

setTimeButton.onclick = () => {
  let minutes = parseInt(inputMinutes.value); //準換成數字計算
  //確認是否有不合規格的value
  if (isNaN(minutes) || minutes < 0) {
    alert("請輸入有效的分鐘數");
    return;
  }
  totalSeconds = minutes * 60;
  inputMinutes.value = ""; // 清空輸入框內容
  updateDisplay();
};
startTimer.onclick = () => {
  if (!isRunning) {
    totalSeconds--; // 立即減少 totalSeconds
    updateDisplay(); // 立即更新顯示
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
  totalSeconds = 0;
  updateDisplay();
  isRunning = false;
};
let timer = () => {
  if (totalSeconds < 0) {
    clearInterval(interval);
    alert("時間到！");
  } else {
    totalSeconds--;
    updateDisplay();
  }
};
let updateDisplay = () => {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  h_secondsDisplay.innerHTML = formatTime(hours);
  m_secondsDisplay.innerHTML = formatTime(minutes);
  secondsDisplay.innerHTML = formatTime(seconds);
};
let formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
