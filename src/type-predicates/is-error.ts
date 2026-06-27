/**
 * Checks if a value is an Error object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an Error object, otherwise `false`.
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}
