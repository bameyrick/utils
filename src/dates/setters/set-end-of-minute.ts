import { setEndOfSecond } from './set-end-of-second.js';

/**
 * Takes a given date and mutates it to the end of the given minute
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the end of the minute.
 */
export function setEndOfMinute(date: Date): Date {
  setEndOfSecond(date);

  date.setSeconds(59);

  return date;
}
