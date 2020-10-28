import { setStartOfMinute } from '.';

/**
 * Takes a given date and mutates it to the start of the given hour
 */
export function setStartOfHour(date: Date): Date {
  setStartOfMinute(date);

  date.setMinutes(0);

  return date;
}
