import { setEndOfDay } from '.';

/**
 * Takes a given date and changes it to the end of the current month
 */
export function setEndOfMonth(date: Date): Date {
  setEndOfDay(date);

  return new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}
