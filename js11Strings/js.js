// const name = "Peter";
// const pet = "cat";
// const petName = "Mandu";
// // \n laver linebreak i vores sætning
// console.log(`My name is ${name}. \nI have a ${pet} called ${petName}`);

// // Finder længden på navn
// const len = name.length;
// console.log(`${name} is ${len} characters long`);

// //Finder første bogstav i navn
// const letter = name[0];
// console.log(`The first letter of ${name} is ${letter}`);

// const name = "Albus Percival Wulfric Brian Dumbeldore";
// const len = name.length;

// //Længde på navnet
// // console.log(`${name} is ${len} characters long`);

// //Andet bogstav i navnet
// const letter2 = name[1];
// // console.log(`${name}s second letter is ${letter2}`);

// //Andet bogstav i navnet (her et mellemrum)
// const letter6 = name[5];
// // console.log(`${name}s second letter is ${letter6}`);

// //Finder index på vores første D
// console.log(name.indexOf("D"));

// //Finder index på vores sidste e
// console.log(name.lastIndexOf("e"));

// //Her vælger vi en del af en streg
// const fullName = "Peter Hejkjgk";
// const firstName = fullName.substring(0, 5);
// //Tjek om der er mellemrum efter navnet
// console.log(firstName + "-");

// //Hvordan bruger vi substring:
// const fullName = "Albus Percival Wulfric Brian Dumbeldore";

// const firstName = fullName.substring(0, 5);
// console.log(firstName + "-");

// const lastName = fullName.substring(29, 38);
// console.log(lastName + "-");

// const thirdName = fullName.substring(15, 22);
// console.log(thirdName + "-");

// const ianName = fullName.substring(25, 28);
// console.log(ianName + "-");

// const busName = fullName.substring(2, 5);
// console.log(busName + "-");

// const fullName = "Peter Heronimous Lind";

// const split = fullName.split(" ");
// //console.log(split);

// const firstName = fullName.substring(0, fullName.indexOf(" "));
// //console.log(firstName);

function nameSplit(param1) {
  //splitter til første navn
  const firstName = param1.substring(0, param1.indexOf(" "));
  //Splitter til mellemnavn
  const middleName = param1.substring(param1.indexOf(" ") + 1, param1.lastIndexOf(" "));
  //Splitter til efternavn
  const lastName = param1.substring(param1.lastIndexOf(" ") + 1);
  //Se at den har gjort det rigtigt
  console.log("firstName", firstName, "middleName", middleName, "lastName", lastName);
}
//Test om du kan skifte navnet ud her og det stadigvæk passer
const navn2 = "Albus Percival Wulfric Brian Dumbledore";
//console.log(nameSplit(navn2));

//En måde at splitte med split og dele på en anden måde.
const nameArr = navn2.split(" ");
const firstNameSplit = nameArr[0];
const lastNameSplit = nameArr[nameArr.length - 1];
// console.log("nameArr", nameArr);
// console.log("firstNameSplit", firstNameSplit);
// console.log("lastNameSplit", lastNameSplit);

//Ændre så, alle bogstaver er små, udover det 3 der er stort. (svar: baSsemand)
const pName = "bAsseMaNd";
const changesName = pName.slice(0, 2).toLowerCase() + pName[2].toUpperCase() + pName.slice(3).toLowerCase();
console.log(changesName);
