// step06 カウンタープログラム2

let interval;
// クリックされたらclickHandlerを実行
const buttonElm = document.querySelector("#timerButton");
buttonElm.addEventListener("click", (e) => clickTimerButton(e));

const reset = document.querySelector("#resetButton");
reset.addEventListener("click", () => clickResetButton(reset));
const clickResetButton = () => {
  clearInterval(interval);
};

// 1秒に1ずつカウントダウン

// クリックされたボタンのIDを取得して、そのボタンのIDによって処理を分岐
const clickTimerButton = (e) => {
  const buttonID = e.currentTarget.id;

  const countElm = document.querySelector("#count");
  const count = parseInt(countElm.textContent);
  const ms = 1000;

  const callback = (count) => {
    countElm.textContent = count;
  };
  if (count > 0) {
    sleep(ms, callback, count);
  } else {
    alert("数字が1以上になるように設定してください。");
  }
};

const sleep = (ms, callback, count) => {
  interval = setInterval(() => {
    if (count === 0) {
      alert("タイムアップ！！");
      clearInterval(interval);
    } else {
      count--;
      callback(count);
    }
  }, ms);
  return interval;
};
