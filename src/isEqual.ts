import { isDate, isNullOrUndefined } from '.';

// tslint:disable-next-line: ban-types
export type IndividualEqualityType = null | undefined | boolean | number | string | Date | object | Function;

export type EqualityType = IndividualEqualityType | IndividualEqualityType[];

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * **Note:** This method supports comparing nulls, undefineds, booleans, numbers, strings, Dates, objects, Functions, and Arrays.
 *
 * Object objects are compared by their own, not inherited, enumerable properties.
 *
 * Functions and DOM nodes are compared by strict equality, i.e. ===.
 *
 * The order of the array items must be the same for the arrays to be equal.
 */
export function isEqual(a: EqualityType, b: EqualityType): boolean {
  if (a === b) {
    return true;
  }

  if (!isNullOrUndefined(a) && !isNullOrUndefined(b) && typeof a === typeof b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && !a.some((value, index) => !isEqual(value, b[index]));
    }

    const aIsDate: boolean = isDate(a);
    const bIsDate: boolean = isDate(b);

    if (aIsDate && bIsDate) {
      return (a as Date).getTime() === (b as Date).getTime();
    }

    const aIsNull: boolean = a === null;
    const bIsNull: boolean = b === null;

    if (typeof a === 'object' && !aIsNull && !bIsNull && !aIsDate && !bIsDate) {
      const keysA = Object.keys(a).sort();
      const keysB = Object.keys(b).sort();

      if (isEqual(keysA, keysB) && !Object.entries(a).some(([key, value]) => !isEqual(b[key], value))) {
        return true;
      }
    }
  }

  return false;
}
