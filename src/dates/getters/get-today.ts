import { setStartOfDay } from '../setters/set-start-of-day.js';

/**
 * Gets a Date for the start of the given/current day
 *
 * @returns A new Date set to the start of today.
 */
export function getToday(): Date {
  return setStartOfDay(new Date());
}
