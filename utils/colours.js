import { getRanNum } from "./numbers";

export function getRanHSLColour() {
  const h = getRanNum(360);
  const s = getRanNum(100);
  const l = getRanNum(100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}
