import { setEndOfSecond } from '.';

/**
 * Takes a given date and changes it to the end of the current minute
 */
export function setEndOfMinute(date: Date): Date {
  setEndOfSecond(date);

  date.setSeconds(59);

  return date;
}
