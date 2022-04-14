const pick = require("../lib/pick.js");

describe("pick", () => {
  it.each([
    { items: [1, 2, 3, 6, 5, "hello", true, false], mockValue: 0.5, expected: 5 },
    { items: [1, "bye", false, 45n], mockValue: 0.3124, expected: "bye" },
    { items: [Infinity, 0, -Infinity], mockValue: 0.909309, expected: -Infinity },
    { items: ["my", NaN, "is", 156, "a", "b", "e", 25n, "t", "g", "AAAAA"], mockValue: 0.000152, expected: "my" },
    { items: ["only"], mockValue: 0.01, expected: "only" },
  ])("pick($items) should return '$expected' when Math.random returns $mockValue", ({ items, mockValue, expected }) => {
    jest.spyOn(Math, "random").mockReturnValueOnce(mockValue);

    const actual = pick(items);
    expect(actual).toBe(expected);

    Math.random.mockRestore();
  });

  it("returns a random item from an array", () => {
    const arr = [1, 2, 3, 4, 5, "hello", true, false];
    const actual = pick(arr);
    expect(arr.includes(actual)).toBeTruthy();
  });

  it("throws an error when called with not an array", () => {
    const str = "Hello";
    function pickFromStr() {
      pick(str);
    }
    expect(pickFromStr).toThrowError(TypeError(`${str} is not an Array`));
  });
});
