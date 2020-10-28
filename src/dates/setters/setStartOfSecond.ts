/**
 * Takes a given date and mutates it to the start of the given second
 */
export function setStartOfSecond(date: Date): Date {
  date.setMilliseconds(0);

  return date;
}
