import { TimeUnit } from '../convert-units/index.js';
import { modifyDate } from './modify-date.js';

/**
 * Adds to a date by a given amount of time units
 */
export function addToDate(date: Date, amount: number, unit: TimeUnit): Date {
  return modifyDate(date, amount, unit);
}
