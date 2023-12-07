import { setEndOfMinute } from '../setters/index.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current minute
 */
export function getEndOfMinute(date: Date = new Date()): Date {
  return setEndOfMinute(new Date(date));
}
