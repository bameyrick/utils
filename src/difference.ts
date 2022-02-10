import { isEqual } from '.';

/**
 * Creates an array of array values not included in the other given array using isEqual for equality comparisons. The order and references
 * of result values are determined by the first array.
 */
export function difference<T extends any[]>(array: T, values: any[]): T {
  if (!array.length || !values.length) {
    return [] as unknown as T;
  }

  return array.reduce((result, item) => {
    if (!values.some(value => isEqual(item, value))) {
      result.push(item);
    }

    return result;
  }, []);
}
