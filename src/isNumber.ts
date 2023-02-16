/**
 * Determines whether a given value is a number
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
