import { setEndOfHour } from '.';

/**
 * Takes a given date and changes it to the end of the current day
 */
export function setEndOfDay(date: Date): Date {
  setEndOfHour(date);

  date.setHours(23);

  return date;
}
