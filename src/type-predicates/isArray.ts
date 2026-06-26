/**
 * Checks if a value is an array.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an array, otherwise `false`.
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}
