/**
 * Detects whether a given value is a number
 */
// tslint:disable-next-line: no-any
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
