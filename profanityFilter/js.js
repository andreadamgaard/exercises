const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// let theText = document.querySelector("p");
let btn = document.querySelector("button");
let info = document.querySelector("h3");
let ord;

function checkWords() {}

function updateWords() {
  let theText = document.querySelector("p").textContent;
  curseWords.forEach((wordObj) => {
    theText = theText.replaceAll(wordObj.bad, wordObj.good);
  });
  document.querySelector("p").textContent = theText;
}
btn.addEventListener("click", updateWords);

function isItSafe() {
  return;
}
