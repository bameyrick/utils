/**
 * Checks if a value is a RegExp object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a RegExp object, otherwise `false`.
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}
