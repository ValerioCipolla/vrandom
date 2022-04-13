const flip = require("./lib/flip.js");
const pick = require("./lib/pick.js");
const int = require("./lib/int.js");
const shuffle = require("./lib/shuffle.js");
const float = require("./lib/float.js");

const vrandom = {
  flip,
  pick,
  int,
  shuffle,
  float,
};

module.exports = vrandom;

console.log(vrandom.float(0, 1, 5));
