const pickFromStr = require("./pickFromStr.js");

/**
 * @returns {string} a random character from the string
 */
const letter = () => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";

  return pickFromStr(lowerAlphabet);
};

module.exports = letter;
