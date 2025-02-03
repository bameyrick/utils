/**
 * Checks the provided value is an array and if not returns the value within an array.
 */
export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
