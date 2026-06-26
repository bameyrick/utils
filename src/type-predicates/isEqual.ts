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
  return _isEqual(a, b, new WeakMap<object, WeakSet<object>>());
}

function _isEqual(a: any, b: any, visited: WeakMap<object, WeakSet<object>>): boolean {
  if (a === b) {
    return true;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }

    // Cycle detection: if this object pair has already been seen, treat as equal
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

    const aValueOf = a.valueOf as unknown;
    const bValueOf = b.valueOf as unknown;
    if (typeof aValueOf === 'function' && typeof bValueOf === 'function' && aValueOf !== Object.prototype.valueOf) {
      return aValueOf.call(a) === bValueOf.call(b);
    }

    const aToString = a.toString as unknown;
    const bToString = b.toString as unknown;
    if (typeof aToString === 'function' && typeof bToString === 'function' && aToString !== Object.prototype.toString) {
      return aToString.call(a) === bToString.call(b);
    }

    const keysA = Reflect.ownKeys(a as object).filter(k => Object.prototype.propertyIsEnumerable.call(a as object, k));
    const keysB = Reflect.ownKeys(b as object).filter(k => Object.prototype.propertyIsEnumerable.call(b as object, k));
    const keysALength = keysA.length;

    if (keysALength !== keysB.length) {
      return false;
    }

    for (let i = 0; i < keysALength; i++) {
      const key = keysA[i];

      if (!Object.prototype.hasOwnProperty.call(b as object, key)) {
        return false;
      }

      if (!_isEqual(a[key], b[key], visited)) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}
