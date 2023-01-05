import { isNumber } from './isNumber';

/**
 * Detects whether a given value is a NaN instance
 */
export function isNaNStrict(value: any): boolean {
  return isNumber(value) && isNaN(value);
}
