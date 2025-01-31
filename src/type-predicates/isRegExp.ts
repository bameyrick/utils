/**
 * Determines whether a given value is a RegExp
 */
export function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp;
}
