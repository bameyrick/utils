import { setEndOfDay } from '.';

/**
 * Takes a given date and changes it to the end of the current week
 */
export function setEndOfWeek(date: Date): Date {
  setEndOfDay(date);

  date.setDate(date.getDate() + (7 - date.getDay()));

  return date;
}
