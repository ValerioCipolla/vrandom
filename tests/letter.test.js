const letter = require("../lib/letter.js");

describe("letter", () => {
  it.each([
    { mockValue: 0.0001, expected: "a" },
    { mockValue: 0.999, expected: "Z" },
    { mockValue: 0.5, expected: "A" },
    { mockValue: 0.4879, expected: "z" },
  ])("letter() should return '$expected` when Math.random() returns $mockValue", ({ mockValue, expected }) => {
    jest.spyOn(Math, "random").mockReturnValueOnce(mockValue);
    const actual = letter();
    expect(actual).toBe(expected);

    Math.random.mockRestore();
  });

  it("returns a string", () => {
    const actual = letter();
    expect(typeof actual).toBe("string");
  });

  it("returns a string of lenght 1", () => {
    const actual = letter();
    expect(actual.length).toBe(1);
  });
});
