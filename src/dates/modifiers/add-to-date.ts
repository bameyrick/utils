import { TimeUnit } from '../convert-units';
import { modifyDate } from './modify-date';

/**
 * Adds to a date by a given amount of time units
 */
export function addToDate(date: Date, amount: number, unit: TimeUnit): Date {
  return modifyDate(date, amount, unit);
}
