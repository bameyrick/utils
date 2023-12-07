import { setEndOfDay } from './index.js';

/**
 * Takes a given date and mutates it to the end of the given week
 */
export function setEndOfWeek(date: Date): Date {
  setEndOfDay(date);

  date.setDate(date.getDate() + (7 - date.getDay()));

  return date;
}
