import { setStartOfHour } from './set-start-of-hour.js';

/**
 * Takes a given date and mutates it to the start of the given day
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the start of the day.
 */
export function setStartOfDay(date: Date): Date {
  setStartOfHour(date);

  date.setHours(0);

  return date;
}
