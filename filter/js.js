"use strict";

// //Lav array af dyr
// const animals = [
//   { name: "Bil", type: "Cat" },
//   { name: "Bob", type: "Cat" },
//   { name: "Booger", type: "Dog" },
//   { name: "Bruce", type: "Dog" },
// ];

// function isCat(animal) {
//   if (animal.type === "Cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isDogs = animals.filter(isDog);
// function isDog(animal) {
//   if (animal.type === "Dog") {
//     return true;
//   } else {
//     return false;
//   }
// }
// let onlyDogs = animals.filter(isDogs);
// console.log("Dogs", onlyDogs);

// function all(animal) {
//   return true;
// }

// function none(animal) {
//   return false;
// }

// animals.filter(none);
// animals.filter(all);

// console.log("all", animals.filter(all));
// console.log("none", animals.filter(none));

// // Hvis dyret er en cat er det true

// let result = animals.filter(isCat);
// console.log(result);

// //Test om dyrene er cat eller ej
// console.log("animal 0 er det en kat?", isCat(animals[0]));
// console.log("animal 0 er det en kat?", isCat(animals[1]));
// console.log("animal 0 er det en kat?", isCat(animals[2]));
// console.log("animal 0 er det en kat?", isCat(animals[3]));

// //simple måde at sætte filter på, her word lenght
// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter((word) => word.length > 6);
// console.log(result);

let str = "Hej ";
console.log(str);
//ligger ekstra tekst til din sting (+=)
str += "du!";
console.log(str);

//kan også gøres med tal
let num = 2;
console.log(num);
num += 6;
console.log(num);

let i = 0;
console.log(i);
//++ ligger 1 til += ligger det antal til du gerne vil
i++;
console.log(i);
