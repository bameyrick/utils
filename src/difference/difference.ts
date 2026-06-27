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

  // Fast path: if all exclusion values are primitives, use a Set for O(1) membership tests.
  let allPrimitive = true;

  for (let i = 0, length = values.length; i < length; i++) {
    const v = values[i];

    if (v !== null && (typeof v === 'object' || typeof v === 'function')) {
      allPrimitive = false;
      break;
    }
  }

  if (allPrimitive) {
    const excluded = new Set(values);
    const result: T[] = [];

    for (let i = 0; i < array.length; i++) {
      if (!excluded.has(array[i])) {
        result.push(array[i]);
      }
    }

    return result;
  }

  // Slow path: deep equality for non-primitive exclusion values.
  const result: T[] = [];

  for (let i = 0, length = array.length; i < length; i++) {
    const item = array[i];

    if (!values.some(value => isEqual(item, value))) {
      result.push(item);
    }
  }
  return result;
}
