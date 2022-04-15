const uppercaseLetter = require("../lib/uppercaseLetter.js");

describe("uppercase letter", () => {
  it("should return a random lowercase letter", () => {
    const lowerAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter = uppercaseLetter();

    expect(lowerAlphabet.includes(letter)).toBe(true);
  });

  it("returns a string", () => {
    const actual = uppercaseLetter();

    expect(typeof actual).toBe("string");
  });

  it("returns a string of length 1", () => {
    const actual = uppercaseLetter();
    
    expect(actual.length).toBe(1);
  });
});
