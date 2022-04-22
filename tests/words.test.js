const words = require("../lib/words.js")

describe("words", () => {
  it("returns an error if called without arguments", () => {
    expect(() => words()).toThrow(
      TypeError("First argument needs to be a positive integer")
    )
  })

  it("returns an error if called with a string size argument", () => {
    expect(() => words("hello")).toThrow(
      TypeError("First argument needs to be a positive integer")
    )
  })

  it("returns an error if called with a negative integer size argument", () => {
    expect(() => words(-4)).toThrow(
      "First argument needs to be a positive integer"
    )
  })

  it.each([
    { size: 5, format: 1 },
    { size: 5, format: "hello" },

    { size: 5, format: true },
    { size: 5, format: false },
    { size: 5, format: 12434 },
  ])(
    "returns an error if called with invalid format argument '$format'",
    ({ size, format }) => {
      expect(() => words(size, format)).toThrow(
        Error(`Invalid format '${format}' picked`)
      )
    }
  )

  it("returns an array of lowercase words when called with 1 argument", () => {
    const size = 5
    const actual = words(size)
    expect(typeof actual).toBe("object")
    actual.forEach(w => {
      expect(typeof w).toBe("string")
      expect(w).toBe(w.toLowerCase())
    })
  })

  it.each([
    { size: 2 },
    { size: 5 },
    { size: 10 },
    { size: 25 },
    { size: 100 },
    { size: 1000 },
  ])(
    "words($size) returns an array of size $size of lowercase words",
    ({ size }) => {
      const actual = words(size)
      expect(typeof actual).toBe("object")
      expect(actual.length).toBe(size)
      actual.forEach(w => {
        expect(typeof w).toBe("string")
        expect(w).toBe(w.toLowerCase())
      })
    }
  )

  it.each([
    { size: 2, format: "uppercase" },
    { size: 5, format: "uppercase" },
    { size: 10, format: "uppercase" },
    { size: 25, format: "uppercase" },
    { size: 100, format: "uppercase" },
    { size: 1000, format: "uppercase" },
  ])(
    "words($size, $format) returns an array of size $size of uppecase words",
    ({ size, format }) => {
      const actual = words(size, format)
      expect(typeof actual).toBe("object")
      expect(actual.length).toBe(size)
      actual.forEach(w => {
        expect(typeof w).toBe("string")
        expect(w).toBe(w.toUpperCase())
      })
    }
  )

  it.each([
    { size: 2, format: "capitalized" },
    { size: 5, format: "capitalized" },
    { size: 10, format: "capitalized" },
    { size: 25, format: "capitalized" },
    { size: 100, format: "capitalized" },
    { size: 1000, format: "capitalized" },
  ])(
    "words($size, $format) returns an array of size $size of capitalized words",
    ({ size, format }) => {
      const actual = words(size, format)
      expect(typeof actual).toBe("object")
      expect(actual.length).toBe(size)
      actual.forEach(w => {
        expect(typeof w).toBe("string")
        expect(w).toBe(w[0].toUpperCase() + w.slice(1).toLowerCase())
      })
    }
  )

  it.each([
    {
      size: 2,
      format: "lowercase",
      mockValues: [0.00001, 0.99999],
      expected: ["ability", "zulu"],
    },
    {
      size: 5,
      format: "uppercase",
      mockValues: [0.2, 0.5, 0.3, 0.4, 0.9],
      expected: ["CURRENT", "MAIN", "FARM", "HEIGHT", "TOOK"],
    },
    {
      size: 5,
      format: "lowercase",
      mockValues: [0.2, 0.5, 0.3, 0.4, 0.9],
      expected: ["current", "main", "farm", "height", "took"],
    },
    {
      size: 5,
      format: "capitalized",
      mockValues: [0.2, 0.5, 0.3, 0.4, 0.9],
      expected: ["Current", "Main", "Farm", "Height", "Took"],
    },
  ])(
    "words($size, $format) should return $expected when Math.random returns $mockValues individually",
    ({ size, format, mockValues, expected }) => {
      mockValues.forEach(mockValue => {
        jest.spyOn(Math, "random").mockReturnValueOnce(mockValue)
      })
      const actual = words(size, format)
      expect(actual).toStrictEqual(expected)

      Math.random.mockRestore()
    }
  )
})
