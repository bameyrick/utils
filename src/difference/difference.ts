import { isEqual } from '../index.js';

/**
 * Creates an array of values from `array` that are not included in `values`, using deep equality (`isEqual`) for comparisons. The order and references of result values are determined by the first array.
 *
 * @param array - The array to inspect.
 * @param values - The values to exclude.
 * @returns A new array of filtered values.
 */
export function difference<T>(array: readonly T[], values: readonly unknown[]): T[] {
  if (!array.length) {
    return [];
  }

  if (!values.length) {
    return array.slice();
  }

  return array.reduce<T[]>((result, item) => {
    if (!values.some(value => isEqual(item, value))) {
      result.push(item);
    }

    return result;
  }, []);
}
