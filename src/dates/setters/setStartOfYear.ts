import { setStartOfMonth } from './index.js';

/**
 * Takes a given date and mutates it to the start of the given Year
 */
export function setStartOfYear(date: Date): Date {
  setStartOfMonth(date);

  date.setMonth(0);

  return date;
}
