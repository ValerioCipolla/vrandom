const uppercaseLetter = require("../lib/uppercaseLetter.js");

describe("uppercase letter", () => {
  it("should return a random uppercase letter", () => {
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter = uppercaseLetter();

    expect(upperAlphabet.includes(letter)).toBe(true);
  });

  it.each([
    { mockValue: 0.03842307692307692, expected: "A" },
    { mockValue: 0.07684615384615384, expected: "B" },
    { mockValue: 0.11526923076923076, expected: "C" },
    { mockValue: 0.15369230769230768, expected: "D" },
    { mockValue: 0.1921153846153846, expected: "E" },
    { mockValue: 0.23053846153846153, expected: "F" },
    { mockValue: 0.2689615384615385, expected: "G" },
    { mockValue: 0.30738461538461537, expected: "H" },
    { mockValue: 0.34580769230769226, expected: "I" },
    { mockValue: 0.3842307692307692, expected: "J" },
    { mockValue: 0.42265384615384616, expected: "K" },
    { mockValue: 0.46107692307692305, expected: "L" },
    { mockValue: 0.49949999999999994, expected: "M" },
    { mockValue: 0.537923076923077, expected: "N" },
    { mockValue: 0.5763461538461538, expected: "O" },
    { mockValue: 0.6147692307692307, expected: "P" },
    { mockValue: 0.6531923076923076, expected: "Q" },
    { mockValue: 0.6916153846153845, expected: "R" },
    { mockValue: 0.7300384615384615, expected: "S" },
    { mockValue: 0.7684615384615384, expected: "T" },
    { mockValue: 0.8068846153846153, expected: "U" },
    { mockValue: 0.8453076923076923, expected: "V" },
    { mockValue: 0.8837307692307692, expected: "W" },
    { mockValue: 0.9221538461538461, expected: "X" },
    { mockValue: 0.960576923076923, expected: "Y" },
    { mockValue: 0.9989999999999999, expected: "Z" },
  ])("uppercaseLetter() should return '$expected` when Math.random() returns $mockValue", ({ mockValue, expected }) => {
    jest.spyOn(Math, "random").mockReturnValueOnce(mockValue);
    const actual = uppercaseLetter();

    expect(actual).toBe(expected);

    Math.random.mockRestore();
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
