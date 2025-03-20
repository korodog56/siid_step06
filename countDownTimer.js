// step06 カウンタープログラム2

let interval;
let clickFlg = 0;

// クリックされたらclickTimerButtonを実行
const buttonElm = document.querySelector("#timerButton");
buttonElm.addEventListener("click", (e) => clickTimerButton(e));

const reset = document.querySelector("#resetButton");
reset.addEventListener("click", () => clickResetButton(reset));
const clickResetButton = () => {
  clearInterval(interval);
};

// CountDownStartボタンを押したらカウントダウンを開始、CountDownStopボタンを押したらカウントダウンを停止
const clickTimerButton = (e) => {
  const buttonID = e.currentTarget.id;

  const countElm = document.querySelector("#count");
  const count = parseInt(countElm.textContent);
  const ms = 1000;

  const timerText = e.currentTarget.textContent;
  const callback = (count) => {
    countElm.textContent = count;
  };
  if (count > 0 && clickFlg === 0) {
    clickFlg = 1;
    e.currentTarget.textContent = "CountDown STOP";
    sleep(ms, callback, count, timerText);
  } else if (clickFlg !== 0) {
    clickFlg = 0;
    e.currentTarget.textContent = "CountDown START";
    clearInterval(interval);
  } else {
    alert("数字が1以上になるように設定してください。");
  }
};

// カウントが0になるまで、1秒に1ずつカウントダウン
const sleep = (ms, callback, count, timerText) => {
  interval = setInterval(() => {
    if (count < 1) {
      clearInterval(interval);
      alert("タイムアップ！！");
      clickFlg = 0;
      timerText = "CountDown START";
    } else {
      count--;
      callback(count);
    }
  }, ms);
  return interval;
};
