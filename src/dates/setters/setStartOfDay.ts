import { setStartOfHour } from '.';

/**
 * Takes a given date and mutates it to the start of the given day
 */
export function setStartOfDay(date: Date): Date {
  setStartOfHour(date);

  date.setHours(0);

  return date;
}
