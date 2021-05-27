/**
 * Detects whether a given value is a string
 */
// tslint:disable-next-line: no-any
export function isString(value: any): value is string {
  return typeof value === 'string';
}
