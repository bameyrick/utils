import { capitalise } from './capitalise';

/**
 * Capitalises the last n characters of a string
 * @param value the string to capitalise
 * @param number the number of characters to capitalise (default 1)
 */
export function capitaliseLast(value: string, number = 1): string {
  const start = value.length - number;

  return capitalise(value, { start });
}
