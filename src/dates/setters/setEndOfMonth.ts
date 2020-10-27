import { setEndOfDay } from '.';

/**
 * Takes a given date and changes it to the end of the current month
 */
export function setEndOfMonth(date: Date): Date {
  setEndOfDay(date);

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);

  return date;
}
