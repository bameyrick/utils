import { isDate } from './isDate.js';
import { isNullOrUndefined } from './isNullOrUndefined.js';

/**
 * Checks if a value is an object (but not an array or date).
 *
 * @param value - The value to check.
 * @returns `true` if the value is an object, otherwise `false`.
 */
export function isObject(value: unknown): value is object {
  return !isNullOrUndefined(value) && typeof value === 'object' && !Array.isArray(value) && !isDate(value);
}
