import { setStartOfSecond } from './set-start-of-second.js';

/**
 * Takes a given date and mutates it to the start of the given minute
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the start of the minute.
 */
export function setStartOfMinute(date: Date): Date {
  setStartOfSecond(date);

  date.setSeconds(0);

  return date;
}
