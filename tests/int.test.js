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

  it("throws an error if arguments are not both integers", () => {
    const min = "hello";
    const max = 3;
    expect(() => int(min, max)).toThrow(
      TypeError("Both arguments need to be integers")
    );
  });

  it("throws an error if min is greater or equal to max", () => {
    const min = 10;
    const max = 1;
    expect(() => int(min, max)).toThrow(
      Error("first argument needs to be smaller than second argument")
    );
  });
});
