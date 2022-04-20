const pickFromStr = require('./pickFromStr.js')

const letter = () => {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = lowerAlphabet.toUpperCase()
  const alphabet = lowerAlphabet + upperAlphabet

  return pickFromStr(alphabet)
}

module.exports = letter
