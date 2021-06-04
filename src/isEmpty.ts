import { isNullOrUndefined } from '.';

/**
 * Checks if a given string is empty
 */
export function isEmpty(value: string | null | undefined): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }

  if (typeof value === 'string') {
    return !value.trim();
  } else {
    throw new Error('The value passed to isEmpty is not a string');
  }
}
