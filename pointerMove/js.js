const myMouse = document.querySelector(".pointerMovesHere");

myMouse.addEventListener("mousemove", changeColours);

function changeColours(evt) {
  console.log(evt);
  myMouse.style.setProperty("--x", `${evt.screenX / 9}%`);
  myMouse.style.setProperty("--y", `${evt.screenY / 9}%`);
}
