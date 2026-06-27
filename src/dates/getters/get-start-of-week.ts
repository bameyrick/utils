import { setStartOfWeek } from '../setters/set-start-of-week.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current week
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the start of the week.
 */
export function getStartOfWeek(date: Date = new Date()): Date {
  return setStartOfWeek(new Date(date));
}
