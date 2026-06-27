/**
 * Takes a given date and mutates it to the start of the given second
 *
 * @param date Date instance to mutate.
 * @returns The same Date instance, normalized to the start of the second.
 */
export function setStartOfSecond(date: Date): Date {
  date.setMilliseconds(0);

  return date;
}
