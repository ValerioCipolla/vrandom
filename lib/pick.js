const int = require("./int.js");

const pick = array => {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an Array`);
  }
  const randomIndex = int(0, array.length);
  return array[randomIndex];
};

module.exports = pick;
