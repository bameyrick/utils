/**
 * Detects whether a given value is null or undefined
 */
// tslint:disable-next-line: no-any
export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}
