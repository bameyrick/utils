import { setStartOfDay } from '.';

/**
 * Takes a given date and changes it to the start of the current month
 */
export function setStartOfMonth(date: Date): Date {
  setStartOfDay(date);

  date.setDate(1);

  return date;
}
