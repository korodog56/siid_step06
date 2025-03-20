// step06 カウンタープログラム2

// すべてのボタンをループで取得して、クリックされたらclickHandlerを実行
for (const buttonElm of document.querySelectorAll(".counter-button")) {
  buttonElm.addEventListener("click", (e) => clickHandler(e));
}

// クリックされたボタンのIDを取得して、そのボタンのIDによって処理を分岐
const clickHandler = (e) => {
  const buttonID = e.currentTarget.id;

  const countElm = document.querySelector("#count");
  const count = parseInt(countElm.textContent);
  let newCount = null;

  // ボタンのIDによって処理を分岐
  if (buttonID === "countDownButton-20" && clickFlg === 0) {
    newCount = count - 20;
  } else if (buttonID === "countDownButton" && clickFlg === 0) {
    newCount = count - 1;
  } else if (buttonID === "countUpButton" && clickFlg === 0) {
    newCount = count + 1;
  } else if (buttonID === "countUpButton-20" && clickFlg === 0) {
    newCount = count + 20;
  } else if (buttonID === "resetButton") {
    document.querySelector("#timerButton").textContent = "CountDown START";
    newCount = 0;
    clickFlg = 0;
    clearInterval(interval);
  }

  if (newCount !== null) {
    console.log(newCount);
    countElm.textContent = newCount;
  }

  // カウントが100の倍数であれば、緑色にする(0は除く)
  if (newCount % 100 === 0 && newCount !== 0 && newCount) {
    countElm.style.color = "green";
    alert(newCount + "です!!");
  } else {
    countElm.style.color = "black";
  }
};
