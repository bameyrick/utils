/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Moment } from 'moment';
import { isMoment } from './isMoment.js';

// eslint-disable-next-line @typescript-eslint/ban-types
export type IndividualEqualityType = null | undefined | boolean | number | string | Date | object | Function;

export type EqualityType = IndividualEqualityType | IndividualEqualityType[];

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * **Note:** This method supports comparing nulls, undefineds, booleans, numbers, strings, Dates, objects, Functions, Arrays, RegExs, Maps, Sets, and Typed Arrays.
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
        if (!isEqual(i[1], b.get(i[0]))) {
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const length: number = (a as any).length;

      if (length !== (b as any).length) {
        return false;
      }

      for (let i = 0; i < length; i++) {
        if (a[i] !== b[i]) {
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

    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }

    if (isMoment(a)) {
      if (!isMoment(b)) {
        return false;
      }

      return (a as Moment).isSame(b as Moment);
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
