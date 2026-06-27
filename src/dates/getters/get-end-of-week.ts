import { setEndOfWeek } from '../setters/set-end-of-week.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current week
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the end of the week.
 */
export function getEndOfWeek(date: Date = new Date()): Date {
  return setEndOfWeek(new Date(date));
}
