import { isReactElement } from './isReactElement';

/**
 * Figuring out which properties of an object should be recursively iterated over when merging.
 */
export function isMergeableObject(value: any): boolean {
  return isNonNullObject(value) && !isSpecial(value as object);
}

function isNonNullObject(value: any): boolean {
  return !!value && typeof value === 'object';
}

function isSpecial(value: object): boolean {
  const stringValue = Object.prototype.toString.call(value) as string;

  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
