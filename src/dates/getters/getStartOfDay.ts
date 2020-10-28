import { setStartOfDay } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current day
 */
export function getStartOfDay(date: Date = new Date()): Date {
  return setStartOfDay(new Date(date));
}
