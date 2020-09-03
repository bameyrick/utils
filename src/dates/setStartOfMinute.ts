import { setStartOfSecond } from '.';

/**
 * Takes a given date and changes it to the start of the current minute
 */
export function setStartOfMinute(date: Date): Date {
  setStartOfSecond(date);

  date.setSeconds(0);

  return date;
}
