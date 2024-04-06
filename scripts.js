"use strict";

const calcRandomNumber = Math.trunc(Math.random() * 10000 + 1);

let unkNumber = calcRandomNumber;
const check = document.querySelector(".check");

let att = 0;
let latt = 0;
const resetValue = 0;

function displayNotification(Notifi) {
  document.querySelector(".notification").textContent = Notifi;
}

check.addEventListener("click", function () {
  const input = Number(document.querySelector(".input").value);
  if (!input) {
    displayNotificatio("That's not a number 🤓");
  } else if (input === unkNumber) {
    displayNotification("Correct!!");
    latt = att;
    document.querySelector(".l-attempts-value").textContent = latt;
    document.querySelector("body").style.backgroundColor = "rgb(0, 81, 50)";
    document.querySelector(".score").textContent = unkNumber;
  } else if (input !== unkNumber) {
    displayNotification(input > unkNumber ? "Too high!" : "Too low!");
    att++;
    document.querySelector(".attempts-value").textContent = att;
    document.querySelector("body").style.backgroundColor = "rgb(100, 0, 0)";
  }
  if (input === 2162008) {
    displayNotification(
      "Awww, chúc mừng vợ yêu ❤️ đã tìm ra được Easter Egg này!"
    );
    att = att - att;
    document.querySelector(".attempts-value").textContent = att;
    document.querySelector("body").style.backgroundColor = "#7b0039";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  att = resetValue;
  unkNumber = calcRandomNumber;
  document.querySelector(".score").textContent = "?";
  document.querySelector(".input").value = "";
  document.querySelector(".notification").textContent =
    "You have decided to play again huh?";
  document.querySelector(".notification").style.color = "#56ff64";
  document.querySelector(".attempts-value").textContent = att;
  document.querySelector(".subtitle").textContent = "[ Current Mode : Casual ]";
  document.querySelector("body").style.backgroundColor = "rgb(45, 41, 53)";
});
