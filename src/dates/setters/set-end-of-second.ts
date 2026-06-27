/**
 * Takes a given date and mutates it to the end of the given second
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the end of the second.
 */
export function setEndOfSecond(date: Date): Date {
  date.setMilliseconds(999);

  return date;
}
