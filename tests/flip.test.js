const flip = require('../lib/flip.js')

describe('flip', () => {
  it('returns a boolean', () => {
    const actual = flip()
    expect(typeof actual).toBe('boolean')
  })

  it.each([
    [false, 0],
    [false, 0.000001],
    [false, 0.1],
    [false, 0.12],
    [false, 0.2],
    [false, 0.245],
    [false, 0.3],
    [false, 0.30159],
    [false, 0.4],
    [false, 0.437],
    [false, 0.5],
    [true, 0.5000001],
    [true, 0.50956],
    [true, 0.6],
    [true, 0.612416],
    [true, 0.7],
    [true, 0.723556956],
    [true, 0.8],
    [true, 0.8235235],
    [true, 0.9000004],
    [true, 0.9999999999999999]
  ])('flip() should return %s when Math.random returns %f', (expected, mockValue) => {
    jest.spyOn(Math, 'random').mockReturnValueOnce(mockValue)

    const actual = flip()
    expect(actual).toBe(expected)

    Math.random.mockRestore()
  })
})
