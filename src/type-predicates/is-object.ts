import { isDate } from './is-date.js';
import { isNullOrUndefined } from './is-null-or-undefined.js';

/**
 * Checks if a value is an object (but not an array or date).
 *
 * @param value - The value to check.
 * @returns `true` if the value is an object, otherwise `false`.
 */
export function isObject(value: unknown): value is object {
  return !isNullOrUndefined(value) && typeof value === 'object' && !Array.isArray(value) && !isDate(value);
}
