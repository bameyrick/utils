import { TimeUnit } from '../convert-units/index.js';
import { modifyDate } from './modify-date.js';

/**
 * Adds to a date by a given amount of time units
 *
 * @param date - The date to add to.
 * @param amount - The amount of time units to add.
 * @param unit - The unit of time to add.
 * @returns The new date with the added time units.
 */
export function addToDate({ date, amount, unit }: { date: Date; amount: number; unit: TimeUnit }): Date {
  return modifyDate({ date, amount, unit });
}
