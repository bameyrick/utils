/**
 * Determines whether a given value is a string
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}
