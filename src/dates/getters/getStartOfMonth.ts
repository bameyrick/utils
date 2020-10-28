import { setStartOfMonth } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current month
 */
export function getStartOfMonth(date: Date = new Date()): Date {
  return setStartOfMonth(new Date(date));
}
