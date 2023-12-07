import { setEndOfDay, setStartOfMonth } from './index.js';

/**
 * Takes a given date and mutates it to the end of the given month
 */
export function setEndOfMonth(date: Date): Date {
  setStartOfMonth(date);
  setEndOfDay(date);

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);

  return date;
}
