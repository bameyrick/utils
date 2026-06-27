import { setEndOfMinute } from '../setters/set-end-of-minute.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current minute
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the end of the minute.
 */
export function getEndOfMinute(date: Date = new Date()): Date {
  return setEndOfMinute(new Date(date));
}
