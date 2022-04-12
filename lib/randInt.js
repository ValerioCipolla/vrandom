export function randInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError("Both arguments need to be integers");
  }
  if (min >= max) {
    throw new Error("first arguments needs to be smaller than second argument");
  }
  return Math.floor(Math.random() * (max - min) + min);
}
