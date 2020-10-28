import { setEndOfWeek } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the end of the given/current week
 */
export function getEndOfWeek(date: Date = new Date()): Date {
  return setEndOfWeek(new Date(date));
}
