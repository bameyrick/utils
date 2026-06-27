import { setStartOfMinute } from '../setters/set-start-of-minute.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current minute
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the start of the minute.
 */
export function getStartOfMinute(date: Date = new Date()): Date {
  return setStartOfMinute(new Date(date));
}
