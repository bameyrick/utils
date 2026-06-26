import { isObject } from './isObject.js';

/**
 * Checks if a value is a plain object (i.e., an object whose prototype is `Object.prototype` or `null`, or that otherwise looks like an `Object` instance).
 *
 * @param value - The value to check.
 * @returns `true` if the value is a plain object, otherwise `false`.
 */
export function isPlainObject(value: unknown): value is object {
  if (!isObject(value)) {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  const ctor = (value as Record<string, unknown>).constructor;

  if (typeof ctor !== 'function') {
    return false;
  }

  const { prototype } = ctor as { prototype: unknown };

  if (!isObject(prototype)) {
    return false;
  }

  if (!Object.prototype.hasOwnProperty.call(prototype, 'isPrototypeOf')) {
    return false;
  }

  return true;
}
