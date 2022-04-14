const shuffle = require("../lib/shuffle.js");

describe("shuffle", () => {
  it("returns array of same length of arg array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = shuffle(array);
    expect(typeof actual).toBe("object");
    expect(actual.length).toBe(array.length);
  });

  it("copys array, shuffles it and returns new array leaving original array unchanged", () => {
    const array = [1, 2, 3, 4, 5];
    const actual = shuffle(array);
    expect(actual).not.toBe(array);
    expect(array).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it.each([
    // Unfortunately, JS doesn't allow for seeding Math.random. That might change with proposals like
    // https://www.proposals.es/proposals/Math.seededRandoms() in the future.
    // For now, can mock Math.random -- unless there's a better, less tedious way.
    { array: [1, 2, 3, 4, 5], mockValues: [0.9, 0.9, 0.9, 0.9, 0.9], expected: [1, 2, 3, 4, 5] },
    { array: [1, true, 3], mockValues: [0.0105, 0.9595, 0.42], expected: [3, true, 1] },
    { array: [1], mockValues: [0.99891], expected: [1] },
    { array: [1], mockValues: [0.0021], expected: [1] },
    { array: ["a", false], mockValues: [0.0021, 0.03683], expected: [false, "a"] },
    {
      array: ["a", "b", "c", "d", "e", "f"],
      mockValues: [0.4, 0.0003, 0.999, 0.9451, 0.9, 0.9],
      expected: ["e", "b", "f", "d", "a", "c"],
    },
  ])(
    "shuffle($array) should return $expected when Math.random returns $mockValues individually",
    ({ array, mockValues, expected }) => {
      jest.spyOn(Math, "random");

      mockValues.forEach(mockValue => {
        Math.random.mockReturnValueOnce(mockValue);
      });

      const actual = shuffle(array);

      expect(actual).toStrictEqual(expected);

      Math.random.mockRestore();
    },
  );
});
