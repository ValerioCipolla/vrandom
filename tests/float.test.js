const float = require("../lib/float.js");

const decimalCount = num => {
  const numStr = num.toString();

  if (numStr.includes(".")) {
    return numStr.split(".")[1].length;
  }

  return 0;
};

describe("float", () => {
  it("should return a number", () => {
    expect(typeof float(0, 1)).toBe("number");
  });

  it.each([
    { mockValue: 0.5, min: 0, max: 1, decimals: 5, expected: 0.5 },
    { mockValue: 0.45, min: 5, max: 10, decimals: 4, expected: 7.25 },
    { mockValue: 0.912, min: 78, max: 120, decimals: 12, expected: 116.304 },
    { mockValue: 0.004, min: 13, max: 14, decimals: 2, expected: 13 },
    { mockValue: 0.356, min: 32, max: 53, decimals: 1, expected: 39.5 },
    { mockValue: 0.9124, min: 10_005, max: 54_505_502, decimals: 3, expected: 49_731_696.463 },
    { mockValue: 0.671, min: 51, max: 98, decimals: undefined, expected: 82.54 },
  ])(
    "float($min, $max, $decimals) should return $expected when Math.random returns $mockValue",
    ({ mockValue, min, max, decimals, expected }) => {
      jest.spyOn(Math, "random").mockReturnValueOnce(mockValue);

      const actual = float(min, max, decimals);
      // `toBeCloseTo` matcher is normally appropriate for comparing floats (as it handles floating point imprecision),
      // but we might be alright here to just use `toBe`.
      expect(actual).toBe(expected);

      Math.random.mockRestore();
    },
  );

  it("should return a number between min and max", () => {
    expect(float(0, 1)).toBeGreaterThanOrEqual(0);
    expect(float(0, 1)).toBeLessThanOrEqual(1);
  });

  it("should return a number with the specified number of decimals", () => {
    expect(decimalCount(float(0, 1, 0))).toBeLessThanOrEqual(0);
    expect(decimalCount(float(0, 1, 1))).toBeLessThanOrEqual(1);
    expect(decimalCount(float(0, 1, 2))).toBeLessThanOrEqual(2);
    expect(decimalCount(float(0, 1, 3))).toBeLessThanOrEqual(3);
    expect(decimalCount(float(0, 1, 4))).toBeLessThanOrEqual(4);
    expect(decimalCount(float(0, 1, 5))).toBeLessThanOrEqual(5);
    expect(decimalCount(float(0, 1, 6))).toBeLessThanOrEqual(6);
    expect(decimalCount(float(0, 1, 7))).toBeLessThanOrEqual(7);
    expect(decimalCount(float(0, 1, 8))).toBeLessThanOrEqual(8);
    expect(decimalCount(float(0, 1, 9))).toBeLessThanOrEqual(9);
    expect(decimalCount(float(0, 1, 10))).toBeLessThanOrEqual(10);
    expect(decimalCount(float(0, 1, 11))).toBeLessThanOrEqual(11);
    expect(decimalCount(float(0, 1, 12))).toBeLessThanOrEqual(12);
    expect(decimalCount(float(0, 1, 13))).toBeLessThanOrEqual(13);
    expect(decimalCount(float(0, 1, 14))).toBeLessThanOrEqual(14);
    expect(decimalCount(float(0, 1, 15))).toBeLessThanOrEqual(15);
  });

  it("should throw an error if min or max is not a number", () => {
    expect(() => {
      float("a", 1);
    }).toThrowError("min and max must be numbers");

    expect(() => {
      float(1, "a");
    }).toThrowError("min and max must be numbers");
  });

  it("should throw an error if decimals is not an integer", () => {
    expect(() => {
      float(0, 1, "a");
    }).toThrowError("decimals must be an integer");
  });

  it("should throw an error if decimals is not between 0 and 15", () => {
    expect(() => {
      float(0, 1, -1);
    }).toThrowError("decimals must be between 0 and 15");

    expect(() => {
      float(0, 1, 16);
    }).toThrowError("decimals must be between 0 and 15");
  });

  it("should throw an error if min is greater than max", () => {
    expect(() => {
      float(1, 0);
    }).toThrowError("first arguments needs to be smaller than second argument");
  });
});
