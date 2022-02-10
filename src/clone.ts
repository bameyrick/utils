import { isDate, isObject } from '.';

/**
 * Deeply clones any given array, object, or date
 */
export function clone<T>(value: T): T {
  if (isDate(value)) {
    return new Date(value) as unknown as T;
  }

  if (Array.isArray(value)) {
    return value.map(item => clone(item)) as unknown as T;
  }

  if (isObject(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, objectValue]) => [key, clone(objectValue)])) as T;
  }

  return value;
}
