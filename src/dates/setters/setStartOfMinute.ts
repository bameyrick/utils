import { setStartOfSecond } from './index.js';

/**
 * Takes a given date and mutates it to the start of the given minute
 */
export function setStartOfMinute(date: Date): Date {
  setStartOfSecond(date);

  date.setSeconds(0);

  return date;
}
