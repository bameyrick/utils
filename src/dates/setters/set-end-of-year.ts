import { setEndOfDay } from './set-end-of-day.js';

/**
 * Takes a given date and mutates it to the end of the given year
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the end of the year.
 */
export function setEndOfYear(date: Date): Date {
  setEndOfDay(date);

  date.setMonth(11);
  date.setDate(31);

  return date;
}
