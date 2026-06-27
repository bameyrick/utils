/**
 * Asynchronously tests whether all elements in the array pass the test implemented by the provided predicate function.
 *
 * @param array - The array to test.
 * @param predicate - An asynchronous function that tests each element of the array. It should return a promise that resolves to a boolean value.
 * @returns A promise that resolves to `true` if all elements in the array pass the test, and `false` otherwise.
 */
export async function asyncEvery<T>(array: T[], predicate: (item: T, index: number, array: T[]) => Promise<boolean>): Promise<boolean> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    if (!(await predicate(array[index], index, array))) {
      return false;
    }
  }

  return true;
}
