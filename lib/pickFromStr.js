const int = require('./int.js')

/**
 * @param {string} str
 * @throws if argument is not a string
 */

const pickFromStr = str => {
  if (typeof str !== 'string') {
    throw new TypeError(`${str} is not a string`)
  }
  if (str.length < 1) {
    return ''
  }
  const randomIndex = int(0, str.length, false)
  return str[randomIndex]
}

module.exports = pickFromStr
