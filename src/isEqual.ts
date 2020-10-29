import { isNullOrUndefined } from '.';

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
    if (Array.isArray(a)) {
      console.log(a.some((value, index) => !isEqual(value, (b as IndividualEqualityType[])[index])));
      return (
        a.length === (b as IndividualEqualityType[]).length &&
        !a.some((value, index) => !isEqual(value, (b as IndividualEqualityType[])[index]))
      );
    } else if (typeof a === 'object') {
      const keysA = Object.keys(a as object).sort();
      const keysB = Object.keys(b as object).sort();

      if (isEqual(keysA, keysB) && !Object.entries(a as object).some(([key, value]) => !isEqual((b as object)[key], value))) {
        return true;
      }
    }
  }

  return false;
}
