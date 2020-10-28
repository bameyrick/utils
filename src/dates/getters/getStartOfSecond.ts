import { setStartOfSecond } from '../setters';

/**
 * Takes an optional date and returns a new Date object set to the start of the given/current second
 */
export function getStartOfSecond(date: Date = new Date()): Date {
  return setStartOfSecond(new Date(date));
}
