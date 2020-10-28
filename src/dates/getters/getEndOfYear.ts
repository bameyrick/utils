import { setEndOfYear } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current year
 */
export function getEndOfYear(date: Date = new Date()): Date {
  return setEndOfYear(new Date(date));
}
