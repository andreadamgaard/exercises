"use strict";

function theChange(evt) {
  console.log("change", evt.target.value);
  document.querySelector("body").dataset.theme = evt.target.value;
}
document.querySelector("#chooseTheme").addEventListener("mousedown", theChange);
