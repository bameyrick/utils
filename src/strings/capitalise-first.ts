import { capitalise } from './capitalise';

/**
 * Capitalises the first n characters of a string
 * @param value the string to capitalise
 * @param number the number of characters to capitalise (default 1)
 */
export function capitaliseFirst(value: string, number = 1): string {
  return capitalise(value, { end: number });
}
