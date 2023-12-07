import { TimeUnit } from '../convert-units/index.js';
import { compareDates } from './compare-dates.js';
import { DateComparator } from './date-comparator.enum.js';

/**
 * Determines if two dates are the same. If you want to limit the granularity to a unit other than milliseconds, pass it as the second
 * parameter.
 *
 * When including a second parameter, it will match all units equal or larger. For example, if passing in month will check month and year,
 * or if passing in day will check day, month, and year.
 */
export function isSameDate(a: Date, b: Date, unit?: TimeUnit): boolean {
  return compareDates(a, DateComparator.Same, b, unit);
}
