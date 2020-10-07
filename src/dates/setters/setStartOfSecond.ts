/**
 * Takes a given date and changes it to the start of the current second
 */
export function setStartOfSecond(date: Date): Date {
  date.setMilliseconds(0);

  return date;
}
