import { setStartOfMinute } from '.';

/**
 * Takes a given date and changes it to the start of the current hour
 */
export function setStartOfHour(date: Date): Date {
  setStartOfMinute(date);

  date.setMinutes(0);

  return date;
}
