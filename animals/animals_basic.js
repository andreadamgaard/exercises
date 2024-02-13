"use strict";

window.addEventListener("DOMContentLoaded", start);

let animals;
let makeAnimalArr = [];
let sorted;

function start() {
  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      animals = jsonData;

      // when loaded, display the list
      makeObjects();
      displayList(makeAnimalArr);
    });
}

function displayList(parm) {
  // clear the list
  document.querySelector("#list").innerHTML = "";

  // build a new list
  parm.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list").appendChild(clone);
}

function makeObjects() {
  animals.forEach((animal) => {
    //console.log(animal);
    const animalSplit = animal.fullname.split(" ");
    // // console.log(animalSplit);
    // const firstName = animalSplit[0];
    // // console.log(firstName);
    // const animalType = animalSplit[animalSplit.length - 1];
    // // console.log(animalType);
    // const animalAge = animal.age;
    // // console.log(animalAge);
    // const desc = animalSplit[animalSplit.length - 2];
    // // console.log(desc);

    //Vi samler vores nye array
    let newAnimals = [];
    //ovenover kan skives ind i koden som herunder. Behøver ikke const
    newAnimals.name = animalSplit[0];
    newAnimals.desc = animalSplit[animalSplit.length - 2];
    newAnimals.type = animalSplit[animalSplit.length - 1];
    newAnimals.age = animal.age;
    //console.log(newAnimals);
    //Vi pusher vores nye array ud af function
    makeAnimalArr.push(newAnimals);
  });
}

function filterList(evt) {
  if (evt.target.dataset.filter === "cats") {
    sorted = makeAnimalArr.filter((animal) => animal.type === "cat");
    displayList(sorted);
  } else if (evt.target.dataset.filter === "dogs") {
    sorted = makeAnimalArr.filter((animal) => animal.type === "dog");
    displayList(sorted);
  } else {
    sorted = false;
    displayList(makeAnimalArr);
  }
}

document.querySelectorAll("button").forEach((btns) => {
  btns.addEventListener("click", filterList);
});
