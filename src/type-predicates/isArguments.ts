/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/**
 * Determines if a value is an Arguments object.
 */
export function isArguments(value: any): boolean {
  try {
    if (typeof value.length === 'number' && typeof value.callee === 'function') {
      return true;
    }
  } catch (error) {
    if (error instanceof Error && error.message.indexOf('callee') !== -1) {
      return true;
    }
  }

  return false;
}
