const int = require('../lib/int.js')

describe('int', () => {
  it('returns an integer between min and max', () => {
    const min = 1
    const max = 10
    const actual = int(min, max)
    expect(typeof actual).toBe('number')
    expect(actual).toBeGreaterThanOrEqual(min)
    expect(actual).toBeLessThanOrEqual(max)
  })

  it.each([
    { mockValue: 0.412, min: 0, max: 3, expected: 1 },
    { mockValue: 0.15029, min: 416, max: 5_905, expected: 1_241 },
    { mockValue: 0.5602, min: 15, max: 67, expected: 44 },
    { mockValue: 0.1294, min: 1502, max: 53_047, expected: 8_172 },
    { mockValue: 0.37656, min: 16, max: 23, expected: 19 },
    { mockValue: 0.9713, min: 160_590, max: 1_250_858, expected: 1_219_568 },
    { mockValue: 0.999, min: 1, max: 5, expected: 5 }
  ])(
    'int($min, $max) should return $expected when Math.random returns $mockValue',
    ({ mockValue, min, max, expected }) => {
      jest.spyOn(Math, 'random').mockReturnValueOnce(mockValue)

      const actual = int(min, max)
      expect(actual).toBe(expected)

      Math.random.mockRestore()
    }
  )

  it.each([
    { mockValue: 0.999, min: 0, max: 3, inclusive: false, expected: 2 },
    { mockValue: 0.999, min: 0, max: 3, inclusive: true, expected: 3 },
    { mockValue: 0.412, min: 0, max: 3, inclusive: false, expected: 1 },
    { mockValue: 0.15029, min: 416, max: 5_905, inclusive: false, expected: 1_240 },
    { mockValue: 0.5602, min: 15, max: 67, inclusive: false, expected: 44 },
    { mockValue: 0.1294, min: 1502, max: 53_047, inclusive: false, expected: 8_171 },
    { mockValue: 0.37656, min: 16, max: 23, inclusive: false, expected: 18 },
    { mockValue: 0.9713, min: 160_590, max: 1_250_858, inclusive: false, expected: 1_219_567 },
    { mockValue: 0.999, min: 1, max: 5, inclusive: false, expected: 4 }
  ])(
    'int($min, $max, $inclusive) should return $expected when Math.random returns $mockValue',
    ({ mockValue, min, max, inclusive, expected }) => {
      jest.spyOn(Math, 'random').mockReturnValueOnce(mockValue)

      const actual = int(min, max, inclusive)
      expect(actual).toBe(expected)

      Math.random.mockRestore()
    }
  )

  it('throws an error if arguments are not both integers', () => {
    const min = 'hello'
    const max = 3
    expect(() => int(min, max)).toThrow(TypeError('Both arguments need to be integers'))
  })

  it('throws an error if min is greater or equal to max', () => {
    const min = 10
    const max = 1
    expect(() => int(min, max)).toThrow(Error('first argument needs to be smaller than second argument'))
  })

  it('throws an error if third argument is not a boolean', () => {
    const min = 1
    const max = 10
    const inclusive = 'hello'
    expect(() => int(min, max, inclusive)).toThrow(TypeError('Third argument needs to be a boolean'))
  })
})
