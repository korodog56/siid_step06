// step06 カウンタープログラム2

// クリックされたらclickHandlerを実行
const buttonElm = document.querySelector("#gameButton");
buttonElm.addEventListener("click", (e) => clickGameButton(e));

// クリックされたボタンのIDを取得して、そのボタンのIDによって処理を分岐
const clickGameButton = (e) => {
  const buttonID = e.currentTarget.id;

  const countElm = document.querySelector("#count");
  const count = parseInt(countElm.textContent);
  if (count > 5 && count <= 10) {
    alert(
      "1秒ごとにカウントダウンします。\n0になったと思ったらSTOPを押してください。"
    );
  } else {
    alert("数字を6-10の間で設定してください。");
  }
};
