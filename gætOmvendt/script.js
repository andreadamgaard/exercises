// Set values til vores min og max tal og vores guesscount starter på 0
let lowNum = 0;
let highNum = 100;
let comGuess;
let comGuessCount = 0;

// Start function startGame på klik af startknappen
document.getElementById("start").addEventListener("click", startGame);

// StartGame funtion. Sætter guess til 0 og gør klar til reset når man har gættet.
function startGame() {
  resetGame();
  guessNumber();
}

// Computer gætter nummer. En konstant halvvering af tidligere gæt.
function guessNumber() {
  // comGuess halvveringsregnestykke (evt kan du bruge Math.round, istedet for floor)
  comGuess = Math.floor((lowNum + highNum) / 2);
  // Indsætter comGuess i vores html
  document.getElementById("computer_guess").textContent = `Computerens gæt: ${comGuess}`;
  // Tilføjer et gæt i vores tæller
  comGuessCount++;
}

// Ved for lavt gæt klikker vi på low knap.
document.getElementById("low").addEventListener("click", () => {
  lowNum = comGuess - 1;
  guessNumber();
});

// Ved for højt gæt klikker vi på high knap.
document.getElementById("high").addEventListener("click", () => {
  highNum = comGuess + 1;
  guessNumber();
});

// function tooLowOrHigh(evt){
//   console.log(evt.target.id);
//   if (evt.target.is === "lowNum"){
//     lowNum = comGuess;
//   } else {
//     highNum = comGuess === "highNum"
//   }
// }

// Ved rigtigt gæt klikker vi på korrekt
document.getElementById("correct").addEventListener("click", () => {
  // Giver feedback og fortæller hvor mange gæt det tog
  document.getElementById("feedback").textContent = `HURRA! Computeren gættede rigtigt på ${comGuessCount} forsøg!`;
  // Lukker for du kan klikke på knappere
  stopBtns();
});

// Eventlistener "click" på start, sætter gang i reset, så knapper kan bruges igen
// resetter hele vores spil efter vi har gættet. Alt bliver sat i 0 igen
function resetGame() {
  lowNum = 0;
  highNum = 100;
  comGuessCount = 0;
  document.getElementById("feedback").textContent = "";
  resetBtns();
}

// Når der er gættet rigtigt kan vores knapper ikke klikkes på længere
function stopBtns() {
  document.getElementById("low").disabled = true;
  document.getElementById("high").disabled = true;
  document.getElementById("correct").disabled = true;
}

// Resetter vores knapper så de kan klikkes på igen (høre til resetGame)
function resetBtns() {
  document.getElementById("low").disabled = false;
  document.getElementById("high").disabled = false;
  document.getElementById("correct").disabled = false;
}
