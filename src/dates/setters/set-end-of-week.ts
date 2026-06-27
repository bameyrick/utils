import { setEndOfDay } from './set-end-of-day.js';

/**
 * Takes a given date and mutates it to the end of the given week
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the end of the week.
 */
export function setEndOfWeek(date: Date): Date {
  setEndOfDay(date);

  date.setDate(date.getDate() + ((7 - date.getDay()) % 7));
  return date;
}
