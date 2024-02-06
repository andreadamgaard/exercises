"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParams(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
people.forEach(testParams);
//a bliver elementet selv
//b er iterator, hvor står hvert element
//c er hele array
//d er undefined. Der findes ikke et 4 parameter

// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }

// // De her to gør det samme
// people.forEach(sayHello);

// people.forEach((person) => {
//   console.log(`Hello ${person}`);
// });
