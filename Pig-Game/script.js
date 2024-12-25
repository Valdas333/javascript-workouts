"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let roll;

const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    roll = Math.floor(Math.random() * (6 - 1) + 1);

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${roll}.png`;
    document.getElementById(`score--${currentPlayer}`).textContent = roll;
    if (roll !== 1) {
      currentScore += roll;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[currentPlayer] += currentScore;

    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 21) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", () => {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--active");
  player0El.classList.add("player--active");

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  currentPlayer = 0;
  currentScore = 0;
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
});
