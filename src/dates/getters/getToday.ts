import { setStartOfDay } from '../setters';

/**
 * Gets a Date for the start of the given/current day
 */
export function getToday(): Date {
  return setStartOfDay(new Date());
}
