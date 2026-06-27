import { capitalise } from './capitalise.js';

/**
 * Capitalises the first n characters of a string
 *
 * @param value the string to capitalise
 * @param number the number of characters to capitalise (default 1)
 * @returns the capitalised string
 */
export function capitaliseFirst(value: string, number = 1): string {
  return capitalise(value, { end: number });
}
