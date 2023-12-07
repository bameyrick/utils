import { TimeUnit } from '../convert-units/index.js';
import { getWeekOfYear } from '../getters/index.js';
import { DateComparator } from './date-comparator.enum.js';

/**
 * Determines if date a is before/before or same/same/after or same/or after to date b. If you want to limit the granularity to a unit other
 * than milliseconds, pass it as the second parameter.
 *
 * When including a second parameter, it will match all units equal or larger. For example, if passing in month will check month and year,
 * or if passing in day will check day, month, and year.
 */
export function compareDates(a: Date, comparator: DateComparator, b: Date, unit?: TimeUnit): boolean {
  unit = singulariseUnit(unit);

  const sameComparator = getSameComparator(comparator);

  if (!compare(a.getFullYear(), b.getFullYear(), unit === TimeUnit.Year ? comparator : sameComparator)) {
    return false;
  }

  if (unit === TimeUnit.Year) {
    return true;
  }

  if (!compare(a.getMonth(), b.getMonth(), unit === TimeUnit.Month ? comparator : sameComparator)) {
    return false;
  }

  if (unit === TimeUnit.Month) {
    return true;
  }

  if (!compare(getWeekOfYear(a), getWeekOfYear(b), unit === TimeUnit.Week ? comparator : sameComparator)) {
    return false;
  }

  if (unit === TimeUnit.Week) {
    return true;
  }

  if (!compare(a.getDate(), b.getDate(), unit === TimeUnit.Day ? comparator : sameComparator)) {
    return false;
  }

  if (unit === TimeUnit.Day) {
    return true;
  }

  if (!compare(a.getHours(), b.getHours(), unit === TimeUnit.Hour ? comparator : sameComparator)) {
    return false;
  }

  if (unit === TimeUnit.Hour) {
    return true;
  }

  if (!compare(a.getMinutes(), b.getMinutes(), unit === TimeUnit.Minute ? comparator : sameComparator)) {
    return false;
  }

  if (unit === TimeUnit.Minute) {
    return true;
  }

  if (!compare(a.getSeconds(), b.getSeconds(), unit === TimeUnit.Second ? comparator : sameComparator)) {
    return false;
  }

  if (unit === TimeUnit.Second) {
    return true;
  }

  return compare(a.getMilliseconds(), b.getMilliseconds(), comparator);
}

function compare(a: number, b: number, comparator: DateComparator): boolean {
  switch (comparator) {
    case DateComparator.Before: {
      return a < b;
    }
    case DateComparator.BeforeOrSame: {
      return a <= b;
    }
    case DateComparator.After: {
      return a > b;
    }
    case DateComparator.AfterOrSame: {
      return a >= b;
    }
    default: {
      return a === b;
    }
  }
}

function singulariseUnit(unit?: TimeUnit): TimeUnit | undefined {
  switch (unit) {
    case TimeUnit.Years: {
      return TimeUnit.Year;
    }
    case TimeUnit.Months: {
      return TimeUnit.Month;
    }
    case TimeUnit.Weeks: {
      return TimeUnit.Week;
    }
    case TimeUnit.Days: {
      return TimeUnit.Day;
    }
    case TimeUnit.Hours: {
      return TimeUnit.Hour;
    }
    case TimeUnit.Minutes: {
      return TimeUnit.Minute;
    }
    case TimeUnit.Seconds: {
      return TimeUnit.Second;
    }
    case TimeUnit.Milliseconds: {
      return TimeUnit.Millisecond;
    }
    default: {
      return unit;
    }
  }
}

function getSameComparator(comparator: DateComparator): DateComparator {
  switch (comparator) {
    case DateComparator.Before: {
      return DateComparator.BeforeOrSame;
    }
    case DateComparator.After: {
      return DateComparator.AfterOrSame;
    }
    default: {
      return comparator;
    }
  }
}
