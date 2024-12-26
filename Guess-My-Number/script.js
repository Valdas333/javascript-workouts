"use strict";

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = getRandomNumber();
let score = 20;
let highScore = 0;

const displayScore = function () {
  document.querySelector(".score").textContent = "Score: " + score;
};

function newRandomNumber() {
  secretNumber = getRandomNumber();
  console.log(secretNumber);
}

console.log(secretNumber);

displayScore();
document.querySelector(".check-button").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number-input").value);
  console.log(guess);
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    highScore = document.querySelector(".highscore").textContent.split(": ")[1];
    console.log(highScore);
    if (score > highScore) {
      document.querySelector(".highscore").textContent = `Highscore: ${score}`;
    }
    document.querySelector(".square").textContent = secretNumber;
    displayMessage("You Win!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess < secretNumber) {
    displayMessage("Too Low");
    score--;
  } else if (guess > secretNumber) {
    displayMessage("Too High");
    score--;
  }
  if (score === 0) {
    displayMessage("You lost the game!");
  }
  displayScore();
});

document.querySelector(".again-button").addEventListener("click", function () {
  newRandomNumber();
  document.querySelector("body").style.backgroundColor = "#ffffff";
  document.querySelector(".number-input").value = "";
  displayMessage("Start guessing...");
  score = 20;
  displayScore();
  document.querySelector(".square").textContent = "?";
});
