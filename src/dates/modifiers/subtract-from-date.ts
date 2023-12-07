import { TimeUnit } from '../convert-units/index.js';
import { modifyDate } from './modify-date.js';

/**
 * Subtracts from a date by a given amount of time units
 */
export function subtractFromDate(date: Date, amount: number, unit: TimeUnit): Date {
  return modifyDate(date, -amount, unit);
}
