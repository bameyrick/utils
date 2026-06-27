import { millisecondsToTimeUnit } from './milliseconds-to-time-unit.js';
import { timeUnitToMilliseconds } from './time-unit-to-milliseconds.js';
import { TimeUnit } from './time-unit.enum.js';

/**
 * Converts a numeric duration from one `TimeUnit` to another.
 *
 * @param params.value - The numeric value to convert.
 * @param params.sourceUnit - The `TimeUnit` of the input value.
 * @param params.resultUnit - The `TimeUnit` to convert the value into.
 * @returns The converted value expressed in `resultUnit`.
 */
export function convertTimeUnit({ value, sourceUnit, resultUnit }: { value: number; sourceUnit: TimeUnit; resultUnit: TimeUnit }): number {
  const ms = timeUnitToMilliseconds(value, sourceUnit);

  return millisecondsToTimeUnit(ms, resultUnit);
}
