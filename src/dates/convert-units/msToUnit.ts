import { TimeUnit } from '.';

/**
 * Converts a milliseconds into a TimeUnit
 */
export function msToUnit(value: number, unit: TimeUnit): number {
  switch (unit) {
    case TimeUnit.Milliseconds: {
      return value;
    }
    case TimeUnit.Seconds: {
      return value / 1000;
    }
    case TimeUnit.Minutes: {
      return value / 60000;
    }
    case TimeUnit.Hours: {
      return value / 3600000;
    }
    case TimeUnit.Days: {
      return value / 86400000;
    }
    case TimeUnit.Weeks: {
      return value / 604800000;
    }
  }
}
