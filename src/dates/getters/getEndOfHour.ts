import { setEndOfHour } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current hour
 */
export function getEndOfHour(date: Date = new Date()): Date {
  return setEndOfHour(new Date(date));
}
