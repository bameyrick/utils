import { setStartOfYear } from '../setters/set-start-of-year.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current year
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the start of the year.
 */
export function getStartOfYear(date: Date = new Date()): Date {
  return setStartOfYear(new Date(date));
}
