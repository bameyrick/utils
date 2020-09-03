import { isNullOrUndefined } from './isNullOrUndefined';

/**
 * Checks if a given string value is empty
 */
export function isEmpty(value: string): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }

  return !value.trim();
}
