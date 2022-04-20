const pickFromStr = require('./pickFromStr.js')

/**
 * @param {number} length
 * @param {string} [charset = "alphanumeric"]
 * @throws if length is not an integer or if invalid charset is picked
 */

const string = (size, charset = 'alphanumeric') => {
  if (!Number.isInteger(size)) {
    throw new TypeError("First argument 'size' needs to be an integer")
  }
  if (size < 1) {
    throw new Error("First argument 'size' needs to be a positive integer ( size > 0)")
  }
  if (!['alphanumeric', 'alphabetic'].some(e => e === charset)) {
    throw new Error(`Invalid charset '${charset}' picked`)
  }

  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = lowerAlphabet.toUpperCase()
  const numbers = '0123456789'
  const alphabet = lowerAlphabet + upperAlphabet
  const alphanumericChars = alphabet + numbers

  if (charset === 'alphanumeric') {
    let result = ''
    while (result.length < size) {
      result += pickFromStr(alphanumericChars)
    }
    return result
  } else {
    let result = ''
    while (result.length < size) {
      result += pickFromStr(alphabet)
    }
    return result
  }
}

module.exports = string
