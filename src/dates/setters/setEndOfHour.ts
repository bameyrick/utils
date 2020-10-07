import { setEndOfMinute } from '.';

/**
 * Takes a given date and changes it to the end of the current hour
 */
export function setEndOfHour(date: Date): Date {
  setEndOfMinute(date);

  date.setMinutes(59);

  return date;
}
