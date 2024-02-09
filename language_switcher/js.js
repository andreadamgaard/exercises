"use strict";

const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
  en: {
    texts: [
      { text: "boat", location: ".header" },
      { text: "Robot", location: ".footer" },
    ],
  },
};
// let locale = "da";
// //Husk 0 er altid det første element
// console.log(texts.de.texts[0].text);
// //Det her er den samme måde at gøre det på
// console.log(texts["de"].texts[0].text);

//starter siden som da. Ændre ikke vores select box
//How to set select box automaticly
changeLang("da");
function changeLang(locale) {
  texts[locale].texts.forEach((each) => {
    document.querySelector(each.location).textContent = each.text;
  });
}

//Vi putter det her ind i en func som vi kalder vores local (ex eng?)
selectElement.addEventListener("change", (event) => {
  console.log(event.target.value);
  changeLang(event.target.value);
});

// komprimeret version. Nok ikke den besdste fordi den er anonym
// selectElement.addEventListener("change", (event) => {
//   console.log(event.target.value);
//   texts[event.target.value].texts.forEach((each) => {
//     document.querySelector(each.location).textContent = each.text;
//   });
// });
