import { setStartOfYear } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current year
 */
export function getStartOfYear(date: Date = new Date()): Date {
  return setStartOfYear(new Date(date));
}
