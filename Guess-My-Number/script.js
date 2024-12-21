"use strict";

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

let secretNumber = getRandomNumber();
let score = 20;
let highScore = 0;

function newRandomNumber() {
  secretNumber = getRandomNumber();
  console.log(secretNumber);
}

console.log(secretNumber);

document.querySelector(".score").textContent = "Score: " + score;

document.querySelector(".check-button").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number-input").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    highScore = document.querySelector(".highscore").textContent.split(": ")[1];
    console.log(highScore);
    if (score > highScore) {
      document.querySelector(".highscore").textContent = `Highscore: ${score}`;
    }
    document.querySelector(".message").textContent = "You Win!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low";
    score--;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High";
    score--;
  }
  if (score === 0) {
    document.querySelector(".message").textContent = "You lost the game!";
  }
  document.querySelector(".score").textContent = "Score: " + score;
});

document.querySelector(".again-button").addEventListener("click", function () {
  newRandomNumber();
  document.querySelector("body").style.backgroundColor = "#ffffff";
  document.querySelector(".number-input").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = "Score: " + score;
});
