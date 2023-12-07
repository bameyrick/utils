import { setEndOfSecond } from '../setters/index.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current second
 */
export function getEndOfSecond(date: Date = new Date()): Date {
  return setEndOfSecond(new Date(date));
}
