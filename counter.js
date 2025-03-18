// ボタンを押されたら1ずつ数字をカウントアップしていく
for (const buttonElm of document.querySelectorAll(".counter-button")) {
  buttonElm.addEventListener("click", (e) => clickHandler(e));
}
const clickHandler = (e) => {
  console.log(e.currentTarget);

  const buttonID = e.currentTarget.id;

  console.log(buttonID);

  const countElm = document.querySelector("#count");
  const count = parseInt(countElm.textContent);
  let newCount = null;

  if (buttonID === "countDownButton") {
    newCount = count - 1;
  } else if (buttonID === "countUpButton") {
    newCount = count + 1;
  } else {
    newCount = 0;
  }
  console.log(newCount);
  countElm.textContent = newCount;
};
