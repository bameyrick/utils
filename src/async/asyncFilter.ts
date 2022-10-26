/**
 * Allows you to filter an array asynchronously
 */
export async function asyncFilter<T>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<boolean>): Promise<T[]> {
  const results = await Promise.all(array.map(callback));

  return array.filter((_v, index) => results[index]);
}
