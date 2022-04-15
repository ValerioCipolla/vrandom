const lowercaseLetter = require("../lib/lowercaseLetter.js");

describe("lowercase letter", () => {
  it("should return a random lowercase letter", () => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const letter = lowercaseLetter();

    expect(lowerAlphabet.includes(letter)).toBe(true);
  });

  it("returns a string", () => {
    const actual = lowercaseLetter();

    expect(typeof actual).toBe("string");
  });

  it("returns a string of length 1", () => {
    const actual = lowercaseLetter();
    
    expect(actual.length).toBe(1);
  });
});
