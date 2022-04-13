import float from '../lib/float.js'

const decimalCount = num => {
	const numStr = num.toString()

	if (numStr.includes('.')) {
		return numStr.split('.')[1].length
	}

	return 0
}

describe('float', () => {
    it('should return a number', () => {
        expect(typeof float(0, 1)).toBe('number')
    })

    it('should return a number between min and max', () => {
        expect(float(0, 1)).toBeGreaterThanOrEqual(0)
        expect(float(0, 1)).toBeLessThanOrEqual(1)
    })

    it('should return a number with the specified number of decimals', () => {
        expect(decimalCount(float(0, 1, 0))).toBe(0)
        expect(decimalCount(float(0, 1, 1))).toBe(1)
        expect(decimalCount(float(0, 1, 2))).toBe(2)
        expect(decimalCount(float(0, 1, 3))).toBe(3)
        expect(decimalCount(float(0, 1, 4))).toBe(4)
        expect(decimalCount(float(0, 1, 5))).toBe(5)
        expect(decimalCount(float(0, 1, 6))).toBe(6)
        expect(decimalCount(float(0, 1, 7))).toBe(7)
        expect(decimalCount(float(0, 1, 8))).toBe(8)
        expect(decimalCount(float(0, 1, 9))).toBe(9)
        expect(decimalCount(float(0, 1, 10))).toBe(10)
    })

    it('should throw an error if min or max is not a number', () => {
        expect(() => {
            float('a', 1)
        }).toThrowError('min and max must be numbers')

        expect(() => {
            float(1, 'a')
        }).toThrowError('min and max must be numbers')
    })

    it('should throw an error if decimals is not an integer', () => {
        expect(() => {
            float(0, 1, 'a')
        }).toThrowError('decimals must be an integer')
    })

    it('should throw an error if decimals is not between 0 and 15', () => {
        expect(() => {
            float(0, 1, -1)
        }).toThrowError('decimals must be between 0 and 15')

        expect(() => {
            float(0, 1, 16)
        }).toThrowError('decimals must be between 0 and 15')
    })

    it('should throw an error if min is greater than max', () => {
        expect(() => {
            float(1, 0)
        }).toThrowError('first arguments needs to be smaller than second argument')
    })
})