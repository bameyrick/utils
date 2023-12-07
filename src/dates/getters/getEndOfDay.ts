import { setEndOfDay } from '../setters/index.js';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current day
 */
export function getEndOfDay(date: Date = new Date()): Date {
  return setEndOfDay(new Date(date));
}
