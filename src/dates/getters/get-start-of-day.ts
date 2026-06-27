import { setStartOfDay } from '../setters/set-start-of-day.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current day
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the start of the day.
 */
export function getStartOfDay(date: Date = new Date()): Date {
  return setStartOfDay(new Date(date));
}
