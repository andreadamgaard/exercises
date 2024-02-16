const myMouse = document.querySelector("body");
myMouse.addEventListener("mousemove", stopAnimation);

//Gør man intet går den videre og fyldes ud langsomt

//Bevæger man musen bliver den fyldt med det samme og forsvinder ikke

document.querySelector(".inner").addEventListener("animationend", stopAnimation);

function stopAnimation() {
  document.querySelector(".inner").classList.remove("ani");
  document.querySelector(".inner").style.scale = "1 1";
}
