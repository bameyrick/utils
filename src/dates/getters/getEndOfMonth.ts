import { setEndOfMonth } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current month
 */
export function getEndOfMonth(date: Date = new Date()): Date {
  return setEndOfMonth(new Date(date));
}
