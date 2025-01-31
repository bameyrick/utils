/**
 * Determines whether a given value is a date
 */
export function isDate(value: any): value is Date {
  return value instanceof Date;
}
