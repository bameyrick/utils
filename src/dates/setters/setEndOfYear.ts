import { setEndOfDay } from '.';

/**
 * Takes a given date and changes it to the end of the current year
 */
export function setEndOfYear(date: Date): Date {
  setEndOfDay(date);

  date.setMonth(11);
  date.setDate(31);

  return date;
}
