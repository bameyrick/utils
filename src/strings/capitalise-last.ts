import { capitalise } from './capitalise.js';

/**
 * Capitalises the last n characters of a string
 *
 * @param value the string to capitalise
 * @param number the number of characters to capitalise (default 1)
 * @returns the capitalised string
 */
export function capitaliseLast(value: string, number = 1): string {
  const start = value.length - number;

  return capitalise(value, { start });
}
