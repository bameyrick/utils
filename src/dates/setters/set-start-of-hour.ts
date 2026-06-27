import { setStartOfMinute } from './set-start-of-minute.js';

/**
 * Takes a given date and mutates it to the start of the given hour
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the start of the hour.
 */
export function setStartOfHour(date: Date): Date {
  setStartOfMinute(date);

  date.setMinutes(0);

  return date;
}
