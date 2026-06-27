/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type IndividualEqualityType = null | undefined | boolean | number | bigint | string | symbol | Date | object | Function;

export type EqualityType = IndividualEqualityType | IndividualEqualityType[];

/**
 * Performs a deep equality check between two values (primitives, arrays, objects, Dates/RegExps, ArrayBuffer views, and Maps/Sets).
 * Note: Map keys and Set entries are matched using `SameValueZero` (i.e. reference equality for objects); Map values are compared recursively.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 *
 * @returns `true` if the values are deeply equal, otherwise `false`.
 */
export function isEqual(a: unknown, b: unknown): boolean {
  return _isEqual(a, b, null);
}

function _isEqual(a: any, b: any, visited: WeakMap<object, WeakSet<object>> | null): boolean {
  if (a === b) {
    return true;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }

    // Cycle detection: lazily create the WeakMap only when we first enter an object
    // comparison, avoiding allocation overhead for simple/primitive comparisons.
    if (visited === null) {
      visited = new WeakMap<object, WeakSet<object>>();
    }

    const visitedB = visited.get(a as object);

    if (visitedB) {
      if (visitedB.has(b as object)) {
        return true;
      }

      visitedB.add(b as object);
    } else {
      visited.set(a as object, new WeakSet([b as object]));
    }

    if (Array.isArray(a)) {
      const aLength = a.length;

      if (aLength !== b.length) {
        return false;
      }

      for (let i = 0; i < aLength; i++) {
        if (!_isEqual(a[i], b[i], visited)) {
          return false;
        }
      }

      return true;
    }

    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) {
        return false;
      }

      for (const i of a.entries()) {
        if (!b.has(i[0])) {
          return false;
        }
      }

      for (const i of a.entries()) {
        if (!_isEqual(i[1], b.get(i[0]), visited)) {
          return false;
        }
      }

      return true;
    }

    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) {
        return false;
      }

      for (const i of a.entries()) {
        if (!b.has(i[0])) {
          return false;
        }
      }

      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      const viewA = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
      const viewB = new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
      const { length } = viewA;

      if (length !== viewB.length) {
        return false;
      }

      for (let i = 0; i < length; i++) {
        if (viewA[i] !== viewB[i]) {
          return false;
        }
      }

      return true;
    }

    if (a.constructor === RegExp) {
      return a.source === (b as RegExp).source && a.flags === (b as RegExp).flags;
    }

    // Handles Date and any other class with a custom valueOf (e.g. value objects).
    // Checking only `a` side matches fast-deep-equal's approach — if constructors are
    // the same (checked above) both will have the same valueOf override.
    if (a.valueOf !== Object.prototype.valueOf) {
      return (a.valueOf as () => unknown)() === (b.valueOf as () => unknown)();
    }

    if (a.toString !== Object.prototype.toString) {
      return (a.toString as () => string)() === (b.toString as () => string)();
    }

    // Plain-object key comparison.
    // Object.keys is ~10× faster than Reflect.ownKeys + filter(propertyIsEnumerable)
    // and covers 99% of usage. Symbol-keyed enumerable properties are not compared
    // (matches fast-deep-equal behaviour).
    const keysA = Object.keys(a as object);
    const keysALength = keysA.length;

    if (keysALength !== Object.keys(b as object).length) {
      return false;
    }

    for (let i = 0; i < keysALength; i++) {
      const key = keysA[i];

      if (!Object.prototype.hasOwnProperty.call(b as object, key) || !_isEqual(a[key], b[key], visited)) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}
