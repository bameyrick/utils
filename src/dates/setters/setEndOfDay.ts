import { setEndOfHour } from '.';

/**
 * Takes a given date and mutates it to the end of the given day
 */
export function setEndOfDay(date: Date): Date {
  setEndOfHour(date);

  date.setHours(23);

  return date;
}
