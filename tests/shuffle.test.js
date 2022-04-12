import shuffle from '../lib/shuffle.js'

test('shuffle array', () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const result = shuffle(array)

    expect(typeof result).toBe('object')

    expect(result.length).toBe(array.length)
})
