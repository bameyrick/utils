import { setStartOfMonth } from '.';

/**
 * Takes a given date and changes it to the start of the current Year
 */
export function setStartOfYear(date: Date): Date {
  setStartOfMonth(date);

  date.setMonth(0);

  return date;
}
