const flip = require("./lib/flip.js");
const pick = require("./lib/pick.js");
const int = require("./lib/int.js");
const shuffle = require("./lib/shuffle.js");
const float = require("./lib/float.js");
const pickFromStr = require("./lib/pickFromStr.js");
const letter = require("./lib/letter.js")
const string = require("./lib/string.js")

const vrandom = {
  flip,
  pick,
  int,
  shuffle,
  float,
  pickFromStr,
  letter,
  string
};

module.exports = vrandom;
