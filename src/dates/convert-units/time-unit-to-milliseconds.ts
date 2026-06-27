import { TimeUnit } from './time-unit.enum.js';

/**
 * Convert a value in the specified time unit to milliseconds.
 *
 * @param value The value to convert.
 * @param timeUnit The time unit of the value.
 * @returns The converted value in milliseconds.
 */
export function timeUnitToMilliseconds(value: number, timeUnit: TimeUnit): number {
  switch (timeUnit) {
    case TimeUnit.Millisecond:
    case TimeUnit.Milliseconds: {
      return value;
    }
    case TimeUnit.Second:
    case TimeUnit.Seconds: {
      return value * 1000;
    }
    case TimeUnit.Minute:
    case TimeUnit.Minutes: {
      return value * 60000;
    }
    case TimeUnit.Hour:
    case TimeUnit.Hours: {
      return value * 3600000;
    }
    case TimeUnit.Day:
    case TimeUnit.Days: {
      return value * 86400000;
    }
    case TimeUnit.Week:
    case TimeUnit.Weeks: {
      return value * 604800000;
    }
    default: {
      throw new Error(`Unsupported TimeUnit: ${timeUnit}`);
    }
  }
}
