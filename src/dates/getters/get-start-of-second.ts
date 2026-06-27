import { setStartOfSecond } from '../setters/set-start-of-second.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current second
 *
 * @param date Date to copy and normalize. Defaults to the current date and time.
 * @returns A new Date set to the start of the second.
 */
export function getStartOfSecond(date: Date = new Date()): Date {
  return setStartOfSecond(new Date(date));
}
