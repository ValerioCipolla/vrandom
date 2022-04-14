const int = require("./int.js");

/**
 * @template {unknown} T
 * @param {T[]} array
 * @throws if `array` is not an array.
 */
const pick = array => {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an Array`);
  }
  const randomIndex = int(0, array.length, false);
  return array[randomIndex];
};

module.exports = pick;
