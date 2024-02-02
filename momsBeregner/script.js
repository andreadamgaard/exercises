"use strict";

// sayHello("Andrea", "Hegner");

// function sayHello(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
//   const myName = "bo";
// }

//Navnene på variabler
// const firstName = "Bo";
// const animalType = "sloth";
// const animalName = "Hest";

// // Her er det vigtigt at rækkefølgen passer med hvad du putter i din funtion
// presentPet(animalType, animalName, firstName);

// // Her henter den i den præcise rækkefølge der er skrevet ned. Skal matche med overstående for ar være rigtigt
// function presentPet(firstName, animalType, animalName) {
//   //   firstName = "Nico";
//   console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
// }

// // Ting i din function påvirker ikke noget uden for den. Ting udenfor function kan påvirke det inden i, men ikke omvendt

moms(300);

function moms(beloeb, moms = 25) {
  const total = beloeb * (1 + moms / 100);
  console.log(total);
}

// function moms(beloeb, moms = 25) {
//   return beloeb * (1 + moms / 100);
//   console.log(result);
// }
// let moms = moms(100);
