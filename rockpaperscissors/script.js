"use strict";
// Få bevægelse på player 1
//document.querySelector("#player1").classList.add("shake");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const options = document.querySelectorAll("#buttons");
const win = document.querySelector("#win");
const loose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

//Vi får computeren til at vælge en af vores 3 muligheder
//Math random finder et tal fra 0-1 - vi ganger med 3 for at få fra 0-3
//Floor konvertere tallet til hele tal uden ,0000 efter
let randNum;

function generateRandomNum(max) {
  return Math.floor(Math.random() * max) + 1;
}
// Shake funktionen gjort klar
function startShake() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

// Funktion til computerens valg og hvilken class der hhv skal tilføjes de forskellige valg
function outputCom(input) {
  if (input === 1) {
    player2.classList.add("paper");
  } else if (input === 2) {
    player2.classList.add("rock");
  } else player2.classList.add("scissors");
  console.log("outputCom");
}

// Funktion til at sammenligne com og brugerens svar og hvad der så skal ske
function compareOutcome(feedback) {
  win.classList = "hidden";
  loose.classList = "hidden";
  draw.classList = "hidden";
  if ((randNum === 1 && feedback === "rock") || (randNum === 2 && feedback === "scissors") || (randNum === 3 && feedback === "paper")) {
    loose.classList.remove("hidden");
  } else if ((randNum === 1 && feedback === "paper") || (randNum === 2 && feedback === "rock") || (randNum === 3 && feedback === "scissors")) {
    draw.classList.remove("hidden");
  } else win.classList.remove("win");
}

// Starter spil
// function startGame(feedback) {
//   startShake();
//   // Generere nummer fra 1-3 ud fra tidligere function
//   randNum = generateRandomNum(3);
//   // Når shake er over skal den korrekte animation på hænderne, alt efter hvilken feedback der er kommet ind til koden
//   player1.addEventListener("animationend", () => {
//     player1.classList = "player";
//     player1.classList.add(feedback);
//   });
//   player2.addEventListener("animationend", () => {
//     player2.classList = "player";
//     outputCom(randNum);
//     compareOutcome(feedback);
//   });
// }
// Når vi klikker går eventet igang. Vi har sat det op så spillet kan starte med alle 3 valgmuligheder.
// options.forEach((option) => {
//   option.addEventListener("mousedown", (event) => {
//     win.classList.add("hidden");
//     loose.classList.add("hidden");
//     draw.classList.add("hidden");

//     if (event.target.className === "rock") {
//       startGame("rock");
//     } else if (event.target.className === "paper") {
//       startGame("paper");
//     } else {
//       startGame("scissors");
//     }
//   });
// });
