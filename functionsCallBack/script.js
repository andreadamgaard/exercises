"use strict";

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};
const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

//Vores functioner. De enten hire eller fire vores personer
function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

// Vi kalder på hire function til person 3, så de nu er hired (hired=true)
// hire(person3);

function fireOrHire(action, person) {
  action(person);
}

// Vi hire FW og fire HP. Vi ændre deres hired value (true eller false)
fireOrHire(hire, person4);
fireOrHire(fire, person3);
console.log(person4, person3);
