/**
 * Asynchronously filters an array based on a provided asynchronous callback function.
 *
 * @param array - The array to filter.
 * @param callback - An asynchronous function that tests each element of the array. It should return a promise that resolves to a boolean value.
 * @returns A promise that resolves to a new array containing only the elements that passed the test implemented by the provided callback function.
 */
export async function asyncFilter<T>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<boolean>): Promise<T[]> {
  const results = await Promise.all(array.map(callback));

  return array.filter((_v, index) => results[index]);
}
