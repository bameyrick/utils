import { setEndOfDay } from './index.js';

/**
 * Takes a given date and mutates it to the end of the given year
 */
export function setEndOfYear(date: Date): Date {
  setEndOfDay(date);

  date.setMonth(11);
  date.setDate(31);

  return date;
}
