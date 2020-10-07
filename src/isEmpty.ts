import { isNullOrUndefined } from '.';

/**
 * Checks if a given string is empty
 */
export function isEmpty(value: string): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }

  return !value.trim();
}
