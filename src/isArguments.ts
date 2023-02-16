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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (error.message.indexOf('callee') !== -1) {
      return true;
    }
  }

  return false;
}
