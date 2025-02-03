import { TimeUnit, convertTimeUnit } from '../convert-units/index.js';
import { getStartOfYear } from './getStartOfYear.js';

/**
 * Gets the week number of the year for the given date. Will use today's date if no date is provided.
 */
export function getWeekOfYear(date: Date = new Date()): number {
  const firstDayOfYear = getStartOfYear(date);
  const offset = firstDayOfYear.getDay();

  const days = convertTimeUnit(date.getTime() - firstDayOfYear.getTime(), TimeUnit.Milliseconds, TimeUnit.Days);

  return Math.ceil((days + offset) / 7);
}
