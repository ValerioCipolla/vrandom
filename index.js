const flip = require("./lib/flip.js");
const pick = require("./lib/pick.js");
const int = require("./lib/int.js");
const shuffle = require("./lib/shuffle.js");
const float = require("./lib/float.js");
const pickFromStr = require("./lib/pickFromStr.js");

const vrandom = {
  flip,
  pick,
  int,
  shuffle,
  float,
  pickFromStr,
};

module.exports = vrandom;
