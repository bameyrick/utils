import { setStartOfHour } from '.';

/**
 * Takes a given date and changes it to the start of the current day
 */
export function setStartOfDay(date: Date): Date {
  setStartOfHour(date);

  date.setHours(0);

  return date;
}
