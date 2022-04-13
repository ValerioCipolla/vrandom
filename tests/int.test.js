const int = require("../lib/int.js");

describe("int", () => {
  it("returns an integer between min and max, max not included", () => {
    const min = 1;
    const max = 10;
    const actual = int(min, max);
    expect(typeof actual).toBe("number");
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThan(max);
  });

  it.each([
    { mockValue: 0.412, min: 0, max: 3, expected: 1 },
    { mockValue: 0.15029, min: 416, max: 5_905, expected: 1_240 },
    { mockValue: 0.5602, min: 15, max: 67, expected: 44 },
    { mockValue: 0.1294, min: 1502, max: 53_047, expected: 8_171 },
    { mockValue: 0.37656, min: 16, max: 23, expected: 18 },
    { mockValue: 0.9713, min: 160_590, max: 1_250_858, expected: 1_219_567 },
  ])(
    "int($min, $max) should return $expected when Math.random returns $mockValue",
    ({ mockValue, min, max, decimals, expected }) => {
      jest.spyOn(Math, "random").mockReturnValueOnce(mockValue);

      const actual = int(min, max, decimals);
      expect(actual).toBe(expected);

      Math.random.mockRestore();
    },
  );

  it("throws an error if arguments are not both integers", () => {
    const min = "hello";
    const max = 3;
    expect(() => int(min, max)).toThrow(TypeError("Both arguments need to be integers"));
  });

  it("throws an error if min is greater or equal to max", () => {
    const min = 10;
    const max = 1;
    expect(() => int(min, max)).toThrow(Error("first argument needs to be smaller than second argument"));
  });
});
