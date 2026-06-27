import { setStartOfDay } from './set-start-of-day.js';

/**
 * Takes a given date and mutates it to the start of the given month
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the start of the month.
 */
export function setStartOfMonth(date: Date): Date {
  setStartOfDay(date);

  date.setDate(1);

  return date;
}
