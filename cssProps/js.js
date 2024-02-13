// document.querySelector(`[data-filter="bat]`).addEventListener("pointerdown", (evt) => {
//   console.log("hej", evt.currentTarget);
// });

// document.querySelector("button").addEventListener("click", changeTheme);

// function changeTheme() {
//   const h1QSL = document.querySelector("h1");
//   //document.querySelector("h1").dataset.filter = "fox";
// }

// document.querySelector("button").addEventListener("click", btn_klik);

// function btn_klik(evt) {
//   console.log("evt", evt);
// }

document.querySelector("button").addEventListener("mousedown", runAni);

function runAni(evt) {
  document.querySelector("div").classList.add("ani");
  document.querySelector("#ball").addEventListener("animationiteration", itaAndEndAni);
  document.querySelector("#ball").addEventListener("animationend", itaAndEndAni);
}

// function iteration(evt) {
//   console.log("iteration");
// }

// function endAni(evt) {
//   console.log("endAni");
// }
function itaAndEndAni(evt) {
  console.log("itaAndEndAni");
  if (evt.type === "animationend") {
    document.querySelector("#ball").classList.remove("ani");
  }
  // document.querySelector("#ball").classList.remove("ani");
}
