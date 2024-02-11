const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theText = document.querySelector("p");
let btn = document.querySelector("button");
let info = document.querySelector("h3");
let ord;

function checkWords() {
  if (theText.textContent.includes(ord)) {
    info.textContent = "Hov, du har ikke udskiftet alle ord...";
  } else info.textContent = "Sådan, alle ord er udskiftet nu :D";
}

function opdateWords() {
  curseWords.forEach((word) => {
    if (word.bad && word.good) {
      const replaceTxt = theText.textContent.replace(word.bad, word.good);
      theText.textContent = replaceTxt;
    } else {
      ord = word.bad.substring();
    }
  });
  checkWords();
}
btn.addEventListener("click", opdateWords);
