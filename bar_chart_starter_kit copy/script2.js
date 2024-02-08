const cueArr = [];

setInterval(generersojle, 1000);

//Får søjlerne til at køre til 20, så skifter den gamle søjler ud med de nye søjler
function generersojle() {
  cueArr.push(getRandomNum());

  document.querySelectorAll("li").forEach((li, i) => {
    li.style.setProperty("--height", cueArr[i]);
  });

  if (cueArr.length > 20) {
    cueArr.shift();
  }
}

function getRandomNum() {
  return Math.floor(Math.random() * 100);
}
