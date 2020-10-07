/**
 * Takes a given date and changes it to the end of the current second
 */
export function setEndOfSecond(date: Date): Date {
  date.setMilliseconds(999);

  return date;
}
