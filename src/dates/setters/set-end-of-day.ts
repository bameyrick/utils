import { setEndOfHour } from './set-end-of-hour.js';

/**
 * Takes a given date and mutates it to the end of the given day
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the end of the day.
 */
export function setEndOfDay(date: Date): Date {
  setEndOfHour(date);

  date.setHours(23);

  return date;
}
