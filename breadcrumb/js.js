"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
document.querySelector("button").addEventListener("click", generateBreadCrumb);
const pPointer = document.querySelector("p");

function generateBreadCrumb() {
  bc.forEach((crumb, i) => {
    //Iteratoren der burges til at finde længden af vores array
    console.log("i", i);
    //Her siger vi til den at i den sidste string skal den gøre noget andet
    //Her fx at den kun skal vise navnet, men ikke linket.
    if (i === bc.length - 1) {
      //console.log("Det er det sidsete element der hedder ", crumb.name);
      pPointer.innerHTML += crumb.name;
    } else {
      //viser vores bredcrumb links, med rigtige links.
      pPointer.innerHTML += `<a href=${crumb.link}>${crumb.name}</a> / `;
      //Mellemrum efter </a> gør der kommer mellemrum i vores array udskriving
    }
  });
}
