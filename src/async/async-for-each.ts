/**
 * Asynchronously executes a provided callback function once for each element in an array, in order.
 *
 * @param array - The array to iterate over.
 * @param callback - An asynchronous function that is called for each element in the array. It should return a promise.
 * @returns A promise that resolves when all elements have been processed.
 */
export async function asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<unknown>): Promise<void> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    await callback(array[index], index, array);
  }
}
