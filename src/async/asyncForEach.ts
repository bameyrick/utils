/**
 * Allows you to iterate over an array asynchronously
 */
export async function asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<unknown>): Promise<void> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    await callback(array[index], index, array);
  }
}
