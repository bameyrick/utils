import { setEndOfSecond } from '../setters/set-end-of-second.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current second
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the end of the second.
 */
export function getEndOfSecond(date: Date = new Date()): Date {
  return setEndOfSecond(new Date(date));
}
