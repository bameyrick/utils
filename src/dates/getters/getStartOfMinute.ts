import { setStartOfMinute } from '../setters/index.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current minute
 */
export function getStartOfMinute(date: Date = new Date()): Date {
  return setStartOfMinute(new Date(date));
}
