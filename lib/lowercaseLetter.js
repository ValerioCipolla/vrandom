const pickFromStr = require('./pickFromStr.js')

/**
 * @returns {string} a random character from the string
 */
const lowercaseLetter = () => {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'

  return pickFromStr(lowerAlphabet)
}

module.exports = lowercaseLetter
