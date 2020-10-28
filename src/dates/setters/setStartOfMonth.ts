import { setStartOfDay } from '.';

/**
 * Takes a given date and mutates it to the start of the given month
 */
export function setStartOfMonth(date: Date): Date {
  setStartOfDay(date);

  date.setDate(1);

  return date;
}
