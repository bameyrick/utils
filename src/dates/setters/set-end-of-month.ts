import { setEndOfDay } from './set-end-of-day.js';
import { setStartOfMonth } from './set-start-of-month.js';

/**
 * Takes a given date and mutates it to the end of the given month
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the end of the month.
 */
export function setEndOfMonth(date: Date): Date {
  setStartOfMonth(date);
  setEndOfDay(date);

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);

  return date;
}
