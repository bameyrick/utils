import { isObject } from './isObject.js';

/**
 * Determines whether the given value is a plain object.
 */
export function isPlainObject(value: any): value is object {
  if (!isObject(value)) {
    return false;
  }

  const constructor = value.constructor;

  // If it has a modified constructor
  if (constructor === undefined) {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const prototype = constructor.prototype;

  // If it has a modified prototype
  if (!isObject(prototype)) {
    return false;
  }

  // If the constructor does not have an Object-specific method
  if (!prototype.hasOwnProperty('isPrototypeOf')) {
    return false;
  }

  // Most likely a plain Object
  return true;
}
