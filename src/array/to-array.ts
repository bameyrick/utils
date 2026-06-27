/**
 * Checks the provided value is an array and if not returns the value within an array.
 *
 * @param value - The value to check and convert to an array if necessary.
 * @returns An array containing the provided value or the original array if it was already an array.
 */
export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
