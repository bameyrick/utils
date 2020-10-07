/**
 * Allows you to iterate over an array asynchronously
 */
// tslint:disable-next-line: no-any
export async function asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => {}): Promise<any> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    // tslint:disable-next-line: no-invalid-await
    await callback(array[index], index, array);
  }
}
