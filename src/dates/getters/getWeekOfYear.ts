import { TimeUnit, convertTimeUnit } from '../convert-units';
import { getStartOfYear } from './getStartOfYear';

/**
 * Gets the week number of the year for the given date. Will use today's date if no date is provided.
 */
export function getWeekOfYear(date: Date = new Date()): number {
  const firstDayOfYear = getStartOfYear(date);

  const days = convertTimeUnit(date.getTime() - firstDayOfYear.getTime(), TimeUnit.Milliseconds, TimeUnit.Days);

  return Math.ceil(days / 7);
}
