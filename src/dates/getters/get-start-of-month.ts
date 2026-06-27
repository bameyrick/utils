import { setStartOfMonth } from '../setters/set-start-of-month.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current month
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the start of the month.
 */
export function getStartOfMonth(date: Date = new Date()): Date {
  return setStartOfMonth(new Date(date));
}
