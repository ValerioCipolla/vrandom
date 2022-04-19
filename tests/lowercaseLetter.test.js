const lowercaseLetter = require("../lib/lowercaseLetter.js");

describe("lowercase letter", () => {
  it("should return a random lowercase letter", () => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const letter = lowercaseLetter();

    expect(lowerAlphabet.includes(letter)).toBe(true);
  });

  it.each([
    { mockValue: 0.03842307692307692, expected: "a" },
    { mockValue: 0.07684615384615384, expected: "b" },
    { mockValue: 0.11526923076923076, expected: "c" },
    { mockValue: 0.15369230769230768, expected: "d" },
    { mockValue: 0.1921153846153846, expected: "e" },
    { mockValue: 0.2305384615384615, expected: "f" },
    { mockValue: 0.2689615384615385, expected: "g" },
    { mockValue: 0.30738461538461537, expected: "h" },
    { mockValue: 0.34580769230769226, expected: "i" },
    { mockValue: 0.3842307692307692, expected: "j" },
    { mockValue: 0.42265384615384616, expected: "k" },
    { mockValue: 0.46107692307692305, expected: "l" },
    { mockValue: 0.49949999999999994, expected: "m" },
    { mockValue: 0.537923076923077, expected: "n" },
    { mockValue: 0.5763461538461538, expected: "o" },
    { mockValue: 0.6147692307692307, expected: "p" },
    { mockValue: 0.6531923076923076, expected: "q" },
    { mockValue: 0.6916153846153845, expected: "r" },
    { mockValue: 0.7300384615384615, expected: "s" },
    { mockValue: 0.7684615384615384, expected: "t" },
    { mockValue: 0.8068846153846153, expected: "u" },
    { mockValue: 0.8453076923076923, expected: "v" },
    { mockValue: 0.8837307692307692, expected: "w" },
    { mockValue: 0.9221538461538461, expected: "x" },
    { mockValue: 0.960576923076923, expected: "y" },
    { mockValue: 0.9989999999999999, expected: "z" },
  ])("lowercaseLetter() should return '$expected` when Math.random() returns $mockValue", ({ mockValue, expected }) => {
    jest.spyOn(Math, "random").mockReturnValueOnce(mockValue);

    const actual = lowercaseLetter();

    expect(actual).toBe(expected);

    Math.random.mockRestore();
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
