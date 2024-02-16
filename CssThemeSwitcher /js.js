"use strict";

const bodyElement = document.querySelector("body");
const btn = document.querySelector("#chooseTheme");
//const theTheme = (bodyElement.dataset.theme = evt);
let themeChoice = localStorage.getItem("theme");
bodyElement.dataset.theme = themeChoice;

function theChange(evt) {
  // bodyElement.dataset.theme = evt;
  console.log(evt);
  localStorage.setItem("theme", evt);

  //Det her gør det samme som den udkommenterde
  let themeChoice = localStorage.getItem("theme");
  bodyElement.dataset.theme = themeChoice;

  //Vi køre den samme If hver gang. Derfor kan vi gøre som ovenover
  // let themeChoice = localStorage.getItem("theme");
  // if (themeChoice === "dark") {
  //   bodyElement.dataset.theme = themeChoice;
  // } else if (themeChoice === "light") {
  //   bodyElement.dataset.theme = themeChoice;
  // } else {
  //   bodyElement.dataset.theme = themeChoice;
  // }
}

btn.addEventListener("change", (evt) => {
  theChange(evt.target.value);
});

// Skifte tema

//Gemmer værdien i localStorage
