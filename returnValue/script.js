"use stict";

// const firstName = "Helge";
// const txt = `Greeting is ${greeting("lars")}`;
// greeting("any name");

// const result = greeting("Klaus");

function greeting(firstName) {
  return `hello ${firstName}`;
}

const sayHi = greeting;
//console.log(sayHi("Mona"));
// sayHi og greeting peger på samme funktion.

function congreet(firstName) {
  console.log(`hello ${firstName}`);
}
setTimeout(congreet, 1000, "Ron");
