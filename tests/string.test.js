const string = require("../lib/string.js");

describe("string", () => {
  it("throws an error when called without arguments", () => {
    expect(() => string()).toThrow(TypeError("First argument 'size' needs to be an integer"));
  });

  it("throws an error when called with argument size < 1", () => {
    expect(() => string(-1)).toThrow(Error("First argument 'size' needs to be a positive integer ( size > 0)"));
  });

  it("throws an error when called with an invalid charset argument", () => {
    expect(() => string(5, "hello")).toThrow(Error("Invalid charset 'hello' picked"));
  });

  it.each([{ size: 1 }, { size: 3 }, { size: 5 }, { size: 10 }, { size: 100 }, { size: 250 }, { size: 1000 }])(
    "string($size) should return a string of length $size",
    ({ size }) => {
      const actual = string(size);
      expect(typeof actual).toBe("string");
      expect(actual.length).toBe(size);
    },
  );

  it.each([
    { size: 5, mockValues: [0.1, 0.4, 0.5, 0.6, 0.9], expected: "gyFL3" },
    { size: 3, mockValues: [0.99922, 0.85126, 0.00124], expected: "90a" },
  ])(
    "string($size) should return '$expected' when Math.random returns $mockValues individually",
    ({ size, mockValues, expected }) => {
      jest.spyOn(Math, "random");
      mockValues.forEach(mockValue => {
        Math.random.mockReturnValueOnce(mockValue);
      });

      const actual = string(size);
      expect(actual).toBe(expected);

      Math.random.mockRestore();
    },
  );

  it.each([
    { size: 5, charset: "alphanumeric", mockValues: [0.1, 0.4, 0.5, 0.6, 0.9], expected: "gyFL3" },
    { size: 5, charset: "alphabetic", mockValues: [0.1, 0.4, 0.5, 0.6, 0.9], expected: "fuAFU" },
    { size: 3, charset: "alphanumeric", mockValues: [0.99922, 0.85126, 0.00124], expected: "90a" },
    { size: 3, charset: "alphabetic", mockValues: [0.99922, 0.85126, 0.00124], expected: "ZSa" },
  ])(
    "string($size, '$charset') should return '$expected' when Math.random returns $mockValues individually",
    ({ size, charset, mockValues, expected }) => {
      jest.spyOn(Math, "random");
      mockValues.forEach(mockValue => {
        Math.random.mockReturnValueOnce(mockValue);
      });

      const actual = string(size, charset);
      expect(actual).toBe(expected);

      Math.random.mockRestore();
    },
  );
});
