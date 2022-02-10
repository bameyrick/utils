import { isDate, isNullOrUndefined } from '.';

/**
 * Detects whether a given value is an object
 */
export function isObject(value: any): value is object {
  return !isNullOrUndefined(value) && typeof value === 'object' && !Array.isArray(value) && !isDate(value);
}