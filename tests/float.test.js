const float = require("../lib/float.js");

const decimalCount = (num) => {
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
