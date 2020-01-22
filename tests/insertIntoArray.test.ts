import { insertIntoArray } from '../src'

describe('Inserting into array', () => {
  test('Return new array after insert', () => {
    const original = [1, 2, 3, 4]

    const copy = insertIntoArray(original, 2, 5)

    expect(copy).not.toBe(original)
  })

  test("Don't change the original array", () => {
    const original = [1, 2, 3, 4]
    const originalCopy = [...original]

    insertIntoArray(original, 2, 5)

    expect(original).toEqual(originalCopy)
  })

  describe('Replacing item at index', () => {
    test('Return new array with one new  element', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 2, 5)

      expect(copy).toStrictEqual([1, 2, 5, 4])
    })

    test('Return new array with multiple new  elements', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 2, [5, 6, 7])

      expect(copy).toStrictEqual([1, 2, 5, 6, 7, 4])
    })

    test('Add new element at the end of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, original.length - 1, 5)

      expect(copy).toStrictEqual([1, 2, 3, 5])
    })
    test('Add multiple new elements at the end of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, original.length - 1, [5, 6, 7])

      expect(copy).toStrictEqual([1, 2, 3, 5, 6, 7])
    })
    test('Add new element at the beginning of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 0, 5)

      expect(copy).toStrictEqual([5, 2, 3, 4])
    })
    test('Add multiple new elements at the beginning of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 0, [5, 6, 7])

      expect(copy).toStrictEqual([5, 6, 7, 2, 3, 4])
    })
  })

  describe('Updating item at index', () => {
    test('Return new array with one new  element', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 2, 5, false)

      expect(copy).toStrictEqual([1, 2, 5, 3, 4])
    })

    test('Return new array with multiple new  elements', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 2, [5, 6, 7], false)

      expect(copy).toStrictEqual([1, 2, 5, 6, 7, 3, 4])
    })

    test('Add new element at the end of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, original.length, 5, false)

      expect(copy).toStrictEqual([1, 2, 3, 4, 5])
    })
    test('Add multiple new elements at the end of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, original.length, [5, 6, 7], false)
      expect(copy).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
    })
    test('Add new element at the beginning of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 0, 5, false)

      expect(copy).toStrictEqual([5, 1, 2, 3, 4])
    })
    test('Add multiple new elements at the beginning of the array', () => {
      const original = [1, 2, 3, 4]

      const copy = insertIntoArray(original, 0, [5, 6, 7], false)

      expect(copy).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
    })
  })
})
