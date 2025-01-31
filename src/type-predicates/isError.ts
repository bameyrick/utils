/**
 * Determines whether the given value is an Error.
 */
export function isError(value: any): value is Error {
  return value instanceof Error;
}
