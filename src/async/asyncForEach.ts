/**
 * Allows you to iterate over an array asynchronously
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export async function asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<{}>): Promise<any> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    await callback(array[index], index, array);
  }
}
