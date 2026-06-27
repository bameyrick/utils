import { setEndOfHour } from '../setters/set-end-of-hour.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current hour
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the end of the hour.
 */
export function getEndOfHour(date: Date = new Date()): Date {
  return setEndOfHour(new Date(date));
}
