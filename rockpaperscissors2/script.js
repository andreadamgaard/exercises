//Claus løsning på Sten saks papir spillet
"use strict";
// Indsætter hvad brugeren og computeren vælger i forskellige functions
let userChoice;
let ComChoice;
let result;

//Eventlistener på alle 3 valg
document.querySelector(".rock").addEventListener("click", klikRock);
document.querySelector(".paper").addEventListener("click", klikPaper);
document.querySelector(".scissors").addEventListener("click", klikScissors);

function klikRock() {
  userChoice = "rock";
  makeComChoice();
}

function klikPaper() {
  userChoice = "paper";
  makeComChoice();
}

function klikScissors() {
  userChoice = "scissors";
  makeComChoice();
}

function makeComChoice() {
  console.log("comChoice", userChoice);
  const randoNum = Math.floor(Math.random() * 3);
  if (randoNum === 0) {
    ComChoice = "rock";
  } else if (randoNum === 1) {
    ComChoice = "paper";
  } else {
    ComChoice = "scissors";
  }
  console.log("RANDO", randoNum);
  determinWinner();
}

function determinWinner() {
  if (userChoice === ComChoice) {
    result = "draw";
  } else if ((userChoice === "rock" && ComChoice === "paper") || (userChoice === "paper" && ComChoice === "scissors") || (userChoice === "scissors" && ComChoice === "rock")) {
    result = "loose";
  } else {
    result = "win";
  }

  startAnimationHand();
}

function startAnimationHand() {
  document.querySelector("#player1").addEventListener("animationend", handAnimationEnd);
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
}
function handAnimationEnd() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");

  console.log("animation Ended");
  if (userChoice === "rock") {
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice === "paper") {
    document.querySelector("#player1").classList.add("paper");
  } else userChoice === "scissors";
  {
    document.querySelector("#player1").classList.add("scissors");
  }

  if (ComChoice === "rock") {
    document.querySelector("#player2").classList.add("rock");
  } else if (ComChoice === "paper") {
    document.querySelector("#player2").classList.add("paper");
  } else ComChoice === "scissors";
  {
    document.querySelector("#player2").classList.add("scissors");
  }
}

function showWinnerScreen() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#loose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  if (result === win) {
    document.querySelector("#win").classList.remove("hidden");
  } else if (result === loose) {
    document.querySelector("#loose").classList.remove("hidden");
  } else  (result === draw) {
    document.querySelector("#draw").classList.remove("hidden");
  }
}
