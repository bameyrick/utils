import { setStartOfHour } from '../setters/set-start-of-hour.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current hour
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the start of the hour.
 */
export function getStartOfHour(date: Date = new Date()): Date {
  return setStartOfHour(new Date(date));
}
