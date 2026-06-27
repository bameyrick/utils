import { isNullOrUndefined } from './is-null-or-undefined.js';

/**
 * Checks if a value is a Buffer.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Buffer, otherwise `false`.
 */
export function isBuffer(value: unknown): value is Buffer {
  if (value === null || value === undefined || typeof value !== 'object') {
    return false;
  }

  const ctor = (value as Record<string, unknown>).constructor;

  if (isNullOrUndefined(ctor) || typeof ctor !== 'function') {
    return false;
  }

  const isBufferFn = (ctor as unknown as Record<string, unknown>).isBuffer;

  if (typeof isBufferFn !== 'function') {
    return false;
  }

  return (isBufferFn as (v: unknown) => boolean)(value);
}
