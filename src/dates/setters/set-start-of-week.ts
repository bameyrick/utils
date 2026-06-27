import { setStartOfDay } from './set-start-of-day.js';

/**
 * Takes a given date and mutates it to the start of the given week
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the start of the week.
 */
export function setStartOfWeek(date: Date): Date {
  const day = date.getDay();

  const offset = day === 0 ? 6 : day - 1;

  date.setDate(date.getDate() - offset);

  setStartOfDay(date);

  return date;
}
