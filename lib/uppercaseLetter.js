const pickFromStr = require("./pickFromStr.js");

/**
 * @returns {string} a random uppercase character from the string
 */
const uppercaseLetter = () => {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return pickFromStr(upperAlphabet);
};

module.exports = uppercaseLetter;
