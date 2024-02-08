// const object = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };

// const nameToGet = "firstName";

// console.log(`${object.firstName} is ${object.age}`);

// console.log(`${object["firstName"]} is ${object["age"]}`);

// console.log(`${object[nameToGet]} is ${object["age"]}`);

// let person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };

// // Er undefined for vi har ikke angivet lastname
// console.log(person1.lastName);
// //Vi angiver last name og den kommer nu frem i log
// person1.lastName = "Mandal";
// console.log(person1.lastName);

// //Vi gør lastname til undefined igen
// person1.lastName = undefined;
// console.log(person1.lastName);

// //lastName findes stadigvæk, bare med undefined value
// console.log("person1.lastName:", person1);

// //m iddleName er ikke oprettet og findes ikke kontra lastName
// console.log("person1.middleName:", person1.middleName);

// //lastName er helt væk fra vores object nu
// delete person1.lastName;
// console.log("person1.lastName:", person1);

// const person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };
// const person2 = {
//   firstName: "Bob",
//   age: 82,
//   student: true,
// };

// console.log(person1);
// person1.age++;

// console.log(person1);

//Den vil ikke gøre en const variabel. Så skal den være en let istedet for const
// person1 = person2;

// //vi gør dem = hinanden.
// const person2 = person1;

// //Vi ændre person2 til Bob
// person2.firstName = "Bob";

// //Ændre også person 1 fordi vi har bedt dem om at være ens
// console.log(person1.firstName);
// console.log(person2);

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};
// const student2 = student1;
//Her er de ens, fordi 2 er en kopi af 1

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};
//Nu er de forskellige fordi der er forskellige objekter

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;
//De er stadigvæk forskellige fordi de er forskellige objekter

if (student1 === student2) {
  console.log("They are the same");
} else {
  console.log("They are not the same");
}
