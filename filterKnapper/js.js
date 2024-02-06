"use strict";
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", btnFilterEVTListener);
});

function btnFilterEVTListener(evt) {
  //   console.log(evt.currentTarget.dataset.filter);
  if (evt.currentTarget.dataset.filter === "electric") {
    console.log("Elektisk bil");
  } else if (evt.currentTarget.dataset.filter === "bus") {
    console.log("Det er bussen");
  } else {
    console.log("Her er cykel");
  }
}
