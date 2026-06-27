/**
 * Checks if a value is an `arguments` object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an `arguments` object, otherwise `false`.
 */
export function isArguments(value: unknown): boolean {
  return Object.prototype.toString.call(value) === '[object Arguments]';
}
