const wordList = require('./data/wordList.js')
const pick = require('./pick.js')

/**
 * @param {number} size
 * @param {string} [format = "lowercase"]
 * @returns {array} an array of randomly generated words
 * @throws if no arguments and/or invalid arguments are passed
 */
const words = (size, format = 'lowercase') => {
  if (!Number.isInteger(size)) {
    throw new TypeError('First argument needs to be a positive integer')
  }

  if (size < 1) {
    throw new TypeError('First argument needs to be a positive integer')
  }

  if (!['lowercase', 'uppercase', 'capitalized'].some(e => e === format)) {
    throw new Error(`Invalid format '${format}' picked`)
  }

  const result = []

  while (size > 0) {
    const word = pick(wordList)
    result.push(word)
    size--
  }

  if (format === 'lowercase') {
    return result.map(w => w.toLowerCase())
  } else if (format === 'uppercase') {
    return result.map(w => w.toUpperCase())
  } else {
    return result.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
  }
}

module.exports = words
