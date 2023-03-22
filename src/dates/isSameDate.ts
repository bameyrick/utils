import { TimeUnit } from './convert-units';
import { getStartOfWeek } from './getters';

/**
 * Determines if two dates are the same. If you want to limit the granularity to a unit other than milliseconds, pass it as the second
 * parameter.
 *
 * When including a second parameter, it will match all units equal or larger. For example, if passing in month will check month and year,
 * or if passing in day will check day, month, and year.
 */
export function isSameDate(a: Date, b: Date, unit?: TimeUnit): boolean {
  if (a.getFullYear() !== b.getFullYear()) {
    return false;
  }

  if (unit === TimeUnit.Year || unit === TimeUnit.Years) {
    return true;
  }

  if (a.getMonth() !== b.getMonth()) {
    return false;
  }

  if (unit === TimeUnit.Month || unit === TimeUnit.Months) {
    return true;
  }

  if (getStartOfWeek(a).getDate() !== getStartOfWeek(b).getDate()) {
    return false;
  }

  if (unit === TimeUnit.Week || unit === TimeUnit.Weeks) {
    return true;
  }

  if (a.getDate() !== b.getDate()) {
    return false;
  }

  if (unit === TimeUnit.Day || unit === TimeUnit.Days) {
    return true;
  }

  if (a.getHours() !== b.getHours()) {
    return false;
  }

  if (unit === TimeUnit.Hour || unit === TimeUnit.Hours) {
    return true;
  }

  if (a.getMinutes() !== b.getMinutes()) {
    return false;
  }

  if (unit === TimeUnit.Minute || unit === TimeUnit.Minutes) {
    return true;
  }

  if (a.getSeconds() !== b.getSeconds()) {
    return false;
  }

  if (unit === TimeUnit.Second || unit === TimeUnit.Seconds) {
    return true;
  }

  return a.getMilliseconds() === b.getMilliseconds();
}
