const pickFromStr = require("../lib/pickFromStr.js");

describe("pickFromStr", () => {
  it("throws an error when called with not a string", () => {
    const str = 123;
    expect(() => pickFromStr(str)).toThrowError(TypeError(`${str} is not a string`));
  });

  it("returns an empty string when called with an empty string", () => {
    const str = "";
    const actual = pickFromStr(str);
    const expected = "";
    expect(actual).toBe(expected);
  });

  it.each([{ string: "h", mockValue: 0.1, expected: "h" }])(
    "pickFromStr($str) should return `$expected` when Math.random returns $mockValue",
    ({ string, mockValue, expected }) => {
      jest.spyOn(Math, "random").mockReturnValueOnce(mockValue);

      const actual = pickFromStr(string);
      expect(actual).toBe(expected);

      Math.random.mockRestore();
    },
  );
});
