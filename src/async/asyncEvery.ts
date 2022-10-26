/**
 * Allows you to run [Array#every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) asynchronously
 */
export async function asyncEvery<T>(array: T[], predicate: (item: T, index: number, array: T[]) => Promise<boolean>): Promise<boolean> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    if (!(await predicate(array[index], index, array))) {
      return false;
    }
  }

  return true;
}
