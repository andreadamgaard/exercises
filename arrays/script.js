// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// henter 4 bogstav (husk 0 også tæller som et tal, så det bliver 5 tal)
// console.log("letters[4]", letters[4]);

//letters length. Længde på vores array
// console.log("letters.length", letters.length);

// Hvad er det sidste element i vores array:
// console.log("sidste letter", letters[letters.length - 1]);

// let newarr = letters;
// newarr[4] = "*";
// // Consolen siger den er "*"
// console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];

let result;

result = people.push("Draco");
console.log(result);
console.log(people);
console.log("***************");
// Push ligger den nye item til i slutningen. Her ligges Draco til i slutningen af vores array

result = people.pop();
console.log(result);
console.log(people);
console.log("***************");
// Fjerner det sidste element i vores array. Her fjernes Draco

result = people.push("Neville");
console.log(result);
console.log(people);
console.log("***************");
// Neville bliver lagt bag på vores array

result = people.push("Luna");
console.log(result);
console.log(people);
console.log("***************");
// Luna bliver lagt efter på Neville

result = people.slice(0, 3);
console.log(result);
console.log(people);
console.log("***************");
// Laver kopi af vores array fra 0-3 (altså Harry Ron og Hermione)
// Sidste index tæller ikke med, det er kun hen til den men ikke inkl. den

result = people.splice(1, 0, "Cho");
console.log(result);
console.log(people);
console.log("***************");
// Sætter "cho ind på plads 1, efter 0, sletter 0 items efter sig i sit array"

people[1] = "Ginny";
console.log(result);
console.log(people);
console.log("***************");
// Ginny overtager plads nummer 1, for Cho

result = people.push("Fred", "George");
console.log(result);
console.log(people);
console.log("***************");
// Ligger Fred og George bagerst i vores array. I rækkefølge

result = people.indexOf("Fred");
console.log(result);
console.log(people);
console.log("***************");
// Viser os hvilken plads vores element kan findes på.

result = people.splice(result, 1);
console.log(result);
console.log(people);
//Vi splicer fra vores result (altså fred) og fjerner det fra vores array
// Splice tilføjer eller fjerner et ellement fra vores array

let letters = Array.from("abcdefghij");
console.log(letters);
//Convertere en xf string til et array for dig

const str = "abcd efghij";

// Splitter et array af noget. Her af alle elementer i strengen. splitter også alle
const arr1 = str.split("");
console.log(arr1);

// Array
const arr2 = Array.from(str);
console.log(arr2);

// Spread operator fx fra astro
const arr3 = [...str];

// De laver alle sammen str til et array. Er bare 3 forskellige måder at gøre det samme på

// Her splitter den på mellemrum. Så hvis du har sætninger der skal deles i hvert ord bruges det her.
const arr4 = str.split(" ");
console.log(arr4);

//Converter et array til en string

//Start med at have et array
const arrayToString = ["hej", "med", "dig", "igen"];

console.log(arrayToString);
// Her kan vi se vores array

console.log(arrayToString.toString());
// Nu bliver det lavet om til en string hvor der står "hej,med,dig,igen"
