import { setStartOfMonth } from './set-start-of-month.js';

/**
 * Takes a given date and mutates it to the start of the given Year
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the start of the year.
 */
export function setStartOfYear(date: Date): Date {
  setStartOfMonth(date);

  date.setMonth(0);

  return date;
}
