const list = document.querySelector("ul");

// En søjle der er li og er lagt i ul liste.
const li = document.createElement("li");
const valueArr = [];

setInterval(generersojle, 1000);

// Får søjlerne til at køre
// function generersojle() {
//   const li = document.createElement("li");
//   //Sætter liste højden til random højde.
//   li.style.setProperty("--height", Math.floor(Math.random() * 100));
//   list.appendChild(li);
//   console.log("generersojle");
// }

//Får søjlerne til at køre til 20, så skifter den gamle søjler ud med de nye søjler
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
