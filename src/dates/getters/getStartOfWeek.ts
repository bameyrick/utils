import { setStartOfWeek } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current week
 */
export function getStartOfWeek(date: Date = new Date()): Date {
  return setStartOfWeek(new Date(date));
}
