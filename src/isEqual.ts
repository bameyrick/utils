import { isDate, isNullOrUndefined, isObject } from '.';
import { isNaNStrict } from './isNaNStrict';

// eslint-disable-next-line @typescript-eslint/ban-types
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
export function isEqual(a: any, b: any): boolean {
  if (a === b || (isNaNStrict(a) && isNaNStrict(b))) {
    return true;
  }

  if (!isNullOrUndefined(a) && !isNullOrUndefined(b) && typeof a === typeof b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && !a.some((value, index) => !isEqual(value as EqualityType, (b as EqualityType[])[index]));
    }

    const aIsDate: boolean = isDate(a);
    const bIsDate: boolean = isDate(b);

    if (aIsDate && bIsDate) {
      return (a as Date).getTime() === (b as Date).getTime();
    }

    const aIsNull: boolean = a === null;
    const bIsNull: boolean = b === null;

    if (isObject(a) && isObject(b) && !aIsNull && !bIsNull && !aIsDate && !bIsDate) {
      const keysA = Object.keys(a).sort();
      const keysB = Object.keys(b).sort();

      if (
        isEqual(keysA, keysB) &&
        !Object.entries(a).some(([key, value]) => !isEqual((b as Record<string, EqualityType>)[key], value as EqualityType))
      ) {
        return true;
      }
    }
  }

  return false;
}
