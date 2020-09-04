/**
 * Allows you to iterate over an array in an asynchronous fashion
 */
export async function asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => {}): Promise<any> {
  for (let index = 0, arrayLength = array.length; index < arrayLength; index++) {
    // tslint:disable-next-line: no-invalid-await
    await callback(array[index], index, array);
  }
}
