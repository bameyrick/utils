import { setEndOfDay } from '../setters/set-end-of-day.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current day
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the end of the day.
 */
export function getEndOfDay(date: Date = new Date()): Date {
  return setEndOfDay(new Date(date));
}
