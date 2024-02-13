"use strict";

window.addEventListener("DOMContentLoaded", start);

let animals;
let makeAnimalArr = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      animals = jsonData;

      // when loaded, display the list
      makeObjects();
      displayList();
    });
}

function displayList() {
  // clear the list
  document.querySelector("#list").innerHTML = "";

  // build a new list
  makeAnimalArr.forEach(displayAnimal);
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
    // console.log(animalSplit);
    const firstName = animalSplit[0];
    // console.log(firstName);
    const animalType = animalSplit[animalSplit.length - 1];
    // console.log(animalType);
    const animalAge = animal.age;
    // console.log(animalAge);
    const desc = animalSplit[animalSplit.length - 2];
    // console.log(desc);

    //Vi samler vores array
    let newAnimals = [];
    newAnimals.name = firstName;
    newAnimals.desc = desc;
    newAnimals.type = animalType;
    newAnimals.age = animalAge;
    console.log(newAnimals);
    //Vi pusher vores nye array
    makeAnimalArr.push(newAnimals);
  });
}
