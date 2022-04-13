const flip = require("../lib/flip.js");

it("returns a boolean", () => {
  const actual = flip();
  expect(typeof actual).toBe("boolean");
});
