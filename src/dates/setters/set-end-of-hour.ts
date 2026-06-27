import { setEndOfMinute } from './set-end-of-minute.js';

/**
 * Takes a given date and mutates it to the end of the given hour
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the end of the hour.
 */
export function setEndOfHour(date: Date): Date {
  setEndOfMinute(date);

  date.setMinutes(59);

  return date;
}
