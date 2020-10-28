/**
 * Takes a given date and mutates it to the end of the given second
 */
export function setEndOfSecond(date: Date): Date {
  date.setMilliseconds(999);

  return date;
}
