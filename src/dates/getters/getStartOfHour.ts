import { setStartOfHour } from '../setters/index.js';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current hour
 */
export function getStartOfHour(date: Date = new Date()): Date {
  return setStartOfHour(new Date(date));
}
