import { isNumber } from './is-number.js';

/**
 * Checks if a value is `NaN` and of type `number`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is `NaN` and of type `number`, otherwise `false`.
 */
export function isNaNStrict(value: unknown): boolean {
  return isNumber(value) && Number.isNaN(value);
}
