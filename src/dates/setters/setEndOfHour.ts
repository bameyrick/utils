import { setEndOfMinute } from './index.js';

/**
 * Takes a given date and mutates it to the end of the given hour
 */
export function setEndOfHour(date: Date): Date {
  setEndOfMinute(date);

  date.setMinutes(59);

  return date;
}
