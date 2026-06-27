import { TimeUnit } from './time-unit.enum.js';

/**
 * Convert milliseconds to the specified time unit.
 *
 * @param milliseconds The number of milliseconds to convert.
 * @param timeUnit The target time unit.
 * @returns The converted value in the specified time unit.
 */
export function millisecondsToTimeUnit(milliseconds: number, timeUnit: TimeUnit): number {
  switch (timeUnit) {
    case TimeUnit.Millisecond:
    case TimeUnit.Milliseconds: {
      return milliseconds;
    }
    case TimeUnit.Second:
    case TimeUnit.Seconds: {
      return milliseconds / 1000;
    }
    case TimeUnit.Minute:
    case TimeUnit.Minutes: {
      return milliseconds / 60000;
    }
    case TimeUnit.Hour:
    case TimeUnit.Hours: {
      return milliseconds / 3600000;
    }
    case TimeUnit.Day:
    case TimeUnit.Days: {
      return milliseconds / 86400000;
    }
    case TimeUnit.Week:
    case TimeUnit.Weeks: {
      return milliseconds / 604800000;
    }
    default: {
      throw new Error(`Unknown TimeUnit: ${timeUnit}`);
    }
  }
}
