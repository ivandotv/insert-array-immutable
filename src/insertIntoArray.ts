/**
 * Create and return a shallow copy of the original array with new items inserted at index.
 *
 * @template T
 * @param source array to be used as a source
 * @param index index at which to begin adding new items
 * @param items single item or array of items to add
 * @param replaceAtIndex  if true item at index will be replaced, if false item at index will be moved after the new items.
 * @returns into array new array
 */
export function insertIntoArray<T>(
  source: T[],
  index: number,
  items: any | any[],
  replaceAtIndex = true
): any[] {
  return [
    ...source.slice(0, index),
    ...spreadIfArray(items),
    ...source.slice(replaceAtIndex ? index + 1 : index),
  ]
}

function spreadIfArray(t: any): any[] {
  return Array.isArray(t) ? t : [t]
}
