// Lav en funktion der console.logger et tilfældigt tal fra og med 0 til og med 100
"use strict";
const knap = document.querySelector("#knap");
const nytTal = document.querySelector("#tal");

// Funktionen til at generere et random tal fra 0-100
function generateRandomNum(maxValue, placement) {
  let randNum = Math.floor(Math.random() * maxValue);
  placement.innerHTML = randNum;
}

knap.addEventListener("click", () => {
  generateRandomNum(100, nytTal);
});

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(100));
