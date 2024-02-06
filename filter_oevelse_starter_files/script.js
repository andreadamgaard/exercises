const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

// Filter der viser alle elektriske biler
function isElectric(vehicle) {
  if (vehicle.isElectric === true) {
    return vehicle;
  }
}

const allElectricVehicles = vehicles.filter(isElectric);
//showTheseVehicles(allElectricVehicles);

//Kan også laves anderledes:
const isElectric2 = vehicles.filter((vehicle) => vehicle.isElectric);
//showTheseVehicles(isElectric2);

// Filter der viser hvilke der har plads til to eller flere
function isMoreThanTwo(vehicle) {
  if (vehicle.passengers > 1) {
    return vehicle;
  }
}
const allWithMoreThanTwo = vehicles.filter(isMoreThanTwo);
//showTheseVehicles(allWithMoreThanTwo);

// Anden måde at skrive den på
const isTwoseats = vehicles.filter((vehicle) => vehicle.passengers > 1);
//showTheseVehicles(isTwoseats);

// Filter viser alle elektiske transportmidler, der også er ejet af Jonas
function electricJonas(vehicle) {
  if (vehicle.isElectric && vehicle.ownedBy === "Jonas") {
    return vehicle;
  }
}
const allElectricJonas = vehicles.filter(electricJonas);
//showTheseVehicles(allElectricJonas);

// Anden måde at skrive den på
const isElectricJonas = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas");
//showTheseVehicles(isElectricJonas);

function rugMoreThanOne(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return vehicle;
  }
}
const allRugMoreThanOne = vehicles.filter(rugMoreThanOne);
//showTheseVehicles(allRugMoreThanOne);

// Anden måde at skrive den på
const isAllRugMore = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
//showTheseVehicles(isAllRugMore);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}

function filterBtns(evt) {
  if (evt.target.dataset.filter === "isElectric2") {
    ulPointer.innerHTML = "";
    showTheseVehicles(isElectric2);
  } else if (evt.target.dataset.filter === "isTwoseats") {
    ulPointer.innerHTML = "";
    showTheseVehicles(isTwoseats);
  } else if (evt.target.dataset.filter === "allElectricJonas") {
    ulPointer.innerHTML = "";
    showTheseVehicles(allElectricJonas);
  } else if (evt.target.dataset.filter === "isAllRugMore") {
    ulPointer.innerHTML = "";
    showTheseVehicles(isAllRugMore);
  } else {
    ulPointer.innerHTML = "";
    showTheseVehicles(vehicles);
  }
}

document.querySelectorAll(".btns").forEach((btns) => {
  btns.addEventListener("mousedown", filterBtns);
});
