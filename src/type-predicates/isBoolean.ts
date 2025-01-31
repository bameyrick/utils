/**
 * Determines whether a given value is a boolean
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}
