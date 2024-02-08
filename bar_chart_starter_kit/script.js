const list = document.querySelector("ul");
// Laver en søjle der er li og er lagt i ul liste.
const li = document.createElement("li");
const valueArr = [];

setInterval(generersojle, 1000);

function generersojle() {
  console.log(valueArr);
  valueArr.push(getRandomNum());

  const randoNum = getRandomNum();
  const li = document.createElement("li");
  //Sætter liste højden til random højde.
  li.style.setProperty("--height", randoNum);
  list.appendChild(li);

  if (valueArr.length > 20) {
    valueArr.shift();
    list.removeChild(list.firstChild);
  }
}

function getRandomNum() {
  return Math.floor(Math.random() * 100);
}
