"use strict";
// nummeret er oprettet og kan bruges i spillet
const btn = document.querySelector("#btn");
const userInput = document.querySelector("#input");
const feedbackSlot = document.querySelector("#feedback");
const celebrationElement = document.querySelector("#tillykke");

// funktion til random tal
function generateRandomNum(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

let randNum = generateRandomNum(100);
console.log(randNum);

// Feedback på hvilket tal brugeren har valgt kontra det rigtige tal.
function feedback(value, input) {
  if (value === input) {
    feedbackSlot.innerHTML = "Okaay, tillykke!! Du har gættet rigtigt!";
    celebrationElement.style.display = "block";
  }
  if (value > input) {
    feedbackSlot.innerHTML = "Du har gættet for lavt :(";
  }
  if (value < input) {
    feedbackSlot.innerHTML = "Du har gættet for højt :(";
  }
  if (input > 100) {
    feedbackSlot.innerHTML = "Kun tal mellem 0-100 din taber :(";
  }
}

btn.addEventListener("click", () => {
  userInput.classList = "";
  const input = parseInt(userInput.value);
  feedback(randNum, input);
});
