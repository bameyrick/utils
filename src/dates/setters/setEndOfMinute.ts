import { setEndOfSecond } from './index.js';

/**
 * Takes a given date and mutates it to the end of the given minute
 */
export function setEndOfMinute(date: Date): Date {
  setEndOfSecond(date);

  date.setSeconds(59);

  return date;
}
