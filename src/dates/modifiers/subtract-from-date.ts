import { TimeUnit } from '../convert-units/index.js';
import { modifyDate } from './modify-date.js';

/**
 * Subtracts from a date by a given amount of time units
 *
 * @param date - The date to subtract from.
 * @param amount - The amount of time units to subtract.
 * @param unit - The unit of time to subtract.
 * @returns The new date with the subtracted time units.
 */
export function subtractFromDate({ date, amount, unit }: { date: Date; amount: number; unit: TimeUnit }): Date {
  return modifyDate({ date, amount: -amount, unit });
}
