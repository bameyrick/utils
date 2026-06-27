/**
 * Asynchronously tests whether at least one element in the array passes the test implemented by the provided predicate function.
 *
 * @param array - The array to test.
 * @param predicate - An asynchronous function that tests each element of the array. It should return a promise that resolves to a boolean value.
 * @returns A promise that resolves to `true` if at least one element in the array passes the test, and `false` otherwise.
 */
export async function asyncSome<T>(array: T[], predicate: (item: T, index: number, array: T[]) => Promise<boolean>): Promise<boolean> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    if (await predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}
