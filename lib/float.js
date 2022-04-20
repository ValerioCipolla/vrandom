/**
 * @param {number} min
 * @param {number} max
 * @param {number} decimals
 * @throws if any of `min`, `max` or `decimals` are invalid.
 */
const float = (min, max, decimals = 2) => {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new TypeError('min and max must be numbers')
  }

  if (!Number.isInteger(decimals)) {
    throw new TypeError('decimals must be an integer')
  }

  if (decimals < 0 || decimals > 15) {
    throw new RangeError('decimals must be between 0 and 15')
  }

  if (min >= max) {
    throw new Error('first arguments needs to be smaller than second argument')
  }

  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
}

module.exports = float
