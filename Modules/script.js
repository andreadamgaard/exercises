// importer din function fra en anden mappe
import { getRanNum } from "../utils/numbers";
import { getRanHSLColour } from "../utils/colours";
import { $, $$ } from "..utils/dom.js";

const h1 = $("h1");
const btn = $("button");
const ps = $$("p");

// h1.textContent = `Random number: ${getRanNum(100)}`;
// console.log(getRanHSLColour(getRanHSLColour));
// h1.style.backgroundColor = getRanHSLColour;

ps.forEach((p) => {
  p.textContent = `random number: ${getRanNum(100)}`;
  p.style.color = getRanHSLColour();
});

btn.addEventListener("click", callback);
