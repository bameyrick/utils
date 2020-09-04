import { unitToMS, msToUnit, TimeUnit } from '.';

/**
 * Converts a value of a given TimeUnit into another TimeUnit
 */
export function convertTimeUnit(value: number, sourceUnit: TimeUnit, resultUnit: TimeUnit): number {
  const ms = unitToMS(value, sourceUnit);

  return msToUnit(ms, resultUnit);
}
