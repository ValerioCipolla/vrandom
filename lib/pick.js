import { randInt } from "./randInt.js";

export function pick(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an Array`);
  }
  const randomIndex = randInt(0, array.length);
  return array[randomIndex];
}
