/**
 * @param {number} min
 * @param {number} max
 * @param {boolean} [inclusive = false]
 * @throws if `min` and/or `max` are invalid.
 */
const int = (min, max, inclusive = true) => {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError("Both arguments need to be integers");
  }
  if (min >= max) {
    throw new Error("first argument needs to be smaller than second argument");
  }
  if (typeof inclusive !== "boolean") {
    throw new TypeError("Third argument needs to be a boolean");
  }
  if (inclusive === true) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

module.exports = int;
