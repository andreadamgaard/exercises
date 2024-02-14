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
    let newAnimals = {};
    //ovenover kan skives ind i koden som herunder. Behøver ikke const
    newAnimals.name = animalSplit[0];
    newAnimals.desc = animalSplit[animalSplit.length - 2];
    newAnimals.type = animalSplit[animalSplit.length - 1];
    newAnimals.age = animal.age;
    //console.log(newAnimals);
    //Vi pusher vores nye array ud af function
    makeAnimalArr.push(newAnimals);
  });
  console.log(makeAnimalArr);
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

function sort(evt) {
  const whatToSortOn = evt.currentTarget.dataset.sort;
  let direction;
  if (evt.currentTarget.dataset.sortorder === "asc") {
    evt.currentTarget.dataset.sortorder = "desc";
    direction = 1;
  } else {
    evt.currentTarget.dataset.sortorder = "asc";
    direction = -1;
  }
  makeAnimalArr.sort((animalA, animalB) => {
    if (animalA[whatToSortOn] < animalB[whatToSortOn]) {
      return -1 * direction;
    } else if (animalA[whatToSortOn] > animalB[whatToSortOn]) {
      return 1 * direction;
    }

    // if (evt.currentTarget.dataset.sort === "sortName") {
    //   return animalA.name.localeCompare(animalB.name);
    // } else if (evt.currentTarget.dataset.sort === "sortType") {
    //   return animalA.type.localeCompare(animalB.type);
    // } else if (evt.currentTarget.dataset.sort === "sortDesc") {
    //   return animalA.desc.localeCompare(animalB.desc);
    // } else if (evt.currentTarget.dataset.sort === "sortAge") {
    //   return animalA.age - animalB.age;
    // }
  });
  displayList(makeAnimalArr);
}

document.querySelectorAll(".sort").forEach((li) => {
  li.addEventListener("click", sort);
});

document.querySelectorAll("button").forEach((btns) => {
  btns.addEventListener("click", filterList);
});
