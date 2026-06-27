import { TimeUnit } from '../convert-units/index.js';
import { compareDates } from './compare-dates.js';
import { DateComparator } from './date-comparator.enum.js';

/**
 * Determines if two dates are the same. If you want to limit the granularity to a unit other than milliseconds, pass it as the second
 * parameter.
 *
 * When including a second parameter, it will match all units equal or larger. For example, if passing in month will check month and year,
 * or if passing in day will check day, month, and year.
 *
 * @param a - The first date to compare.
 * @param b - The second date to compare.
 * @param unit - The unit of time to compare.
 * @returns True if the dates are the same, false otherwise.
 */
export function isSameDate({ a, b, unit }: { a: Date; b: Date; unit?: TimeUnit }): boolean {
  return compareDates({ a, comparator: DateComparator.Same, b, unit });
}
