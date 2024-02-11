let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
//vi splitter teksten på mellemrum
let splitText = theText.split("ord");
//console.log(splitText);
//Vi joiner den igen på mellemrum
//console.log(splitText.join(" "));

//Nu skifter vi ord ud med ting (ord er valgt i vores let)
console.log(splitText.join("ting"));

//Her gør du det samme, bare hurtigere.
console.log(theText.replaceAll("ord", "ting"));

//Find ordet "ord" i strengen theText og erstat den med ting

//Prøv med split / join.

// Prøv med replaceAll()
