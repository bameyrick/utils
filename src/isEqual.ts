/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

// eslint-disable-next-line @typescript-eslint/ban-types
export type IndividualEqualityType = null | undefined | boolean | number | string | Date | object | Function;

export type EqualityType = IndividualEqualityType | IndividualEqualityType[];

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * **Note:** This method supports comparing nulls, undefineds, booleans, numbers, strings, Dates, objects, Functions, Arrays, and RegExs.
 *
 * Object objects are compared by their own, not inherited, enumerable properties.
 *
 * Functions and DOM nodes are compared by strict equality, i.e. ===.
 *
 * The order of the array items must be the same for the arrays to be equal.
 */
export function isEqual(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }

    if (Array.isArray(a)) {
      const aLength = a.length;

      if (aLength !== b.length) {
        return false;
      }

      for (let i = 0; i < aLength; i++) {
        if (!isEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    if (a.constructor === RegExp) {
      return a.source === (b as RegExp).source && a.flags === (b as RegExp).flags;
    }

    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }

    const keysA = Object.keys(a as object);
    const keysB = Object.keys(b as object);

    const keysALength = keysA.length;

    if (keysALength !== keysB.length) {
      return false;
    }

    for (let i = 0; i < keysALength; i++) {
      const key = keysA[i];

      if (!isEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}
