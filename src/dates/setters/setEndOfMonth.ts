import { setEndOfDay } from '.';

/**
 * Takes a given date and mutates it to the end of the given month
 */
export function setEndOfMonth(date: Date): Date {
  setEndOfDay(date);

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);

  return date;
}
