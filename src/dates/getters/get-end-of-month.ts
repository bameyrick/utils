import { setEndOfMonth } from '../setters/set-end-of-month.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current month
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the end of the month.
 */
export function getEndOfMonth(date: Date = new Date()): Date {
  return setEndOfMonth(new Date(date));
}
