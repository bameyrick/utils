/**
 * Figuring out which properties of an object should be recursively iterated over when merging.
 */
export function isMergeableObject(value: unknown): boolean {
  return isNonNullObject(value) && !isSpecial(value as object);
}

function isNonNullObject(value: unknown): boolean {
  return !!value && typeof value === 'object';
}

function isSpecial(value: object): boolean {
  const stringValue = Object.prototype.toString.call(value);

  return (
    stringValue === '[object RegExp]' ||
    stringValue === '[object Date]' ||
    stringValue === '[object Map]' ||
    stringValue === '[object Set]' ||
    stringValue === '[object WeakMap]' ||
    stringValue === '[object WeakSet]' ||
    stringValue === '[object ArrayBuffer]' ||
    ArrayBuffer.isView(value) ||
    Array.isArray(value)
  );
}
