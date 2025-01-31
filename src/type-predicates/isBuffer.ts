/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/**
 * Determines if a value is a Buffer.
 */
export function isBuffer(value: any): value is Buffer {
  if (value.constructor && typeof value.constructor.isBuffer === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return value.constructor.isBuffer(value);
  }

  return false;
}
