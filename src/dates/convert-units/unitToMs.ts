import { TimeUnit } from '.';

/**
 * Converts a TimeUnit into milliseconds
 */
export function unitToMS(value: number, unit: TimeUnit): number {
  switch (unit) {
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
      throw new Error(`Unknown TimeUnit: ${unit}`);
    }
  }
}
