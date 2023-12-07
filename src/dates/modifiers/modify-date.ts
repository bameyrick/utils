import { TimeUnit, unitToMS } from '../convert-units/index.js';
import { getEndOfMonth, getStartOfMonth } from '../getters/index.js';

/**
 * Modifies a date by a given amount of time units
 */
export function modifyDate(date: Date, amount: number, unit: TimeUnit): Date {
  let newDate = new Date(date);

  amount = Math.round(amount);

  const originalHour = date.getHours();

  switch (unit) {
    case TimeUnit.Millisecond:
    case TimeUnit.Milliseconds:
    case TimeUnit.Second:
    case TimeUnit.Seconds:
    case TimeUnit.Minute:
    case TimeUnit.Minutes:
    case TimeUnit.Hour:
    case TimeUnit.Hours: {
      newDate = new Date(newDate.getTime() + unitToMS(amount, unit));
      break;
    }
    case TimeUnit.Day:
    case TimeUnit.Days: {
      newDate.setDate(newDate.getDate() + amount);
      break;
    }
    case TimeUnit.Week:
    case TimeUnit.Weeks: {
      newDate.setDate(newDate.getDate() + amount * 7);

      break;
    }
    case TimeUnit.Month:
    case TimeUnit.Months:
    case TimeUnit.Year:
    case TimeUnit.Years: {
      newDate = getStartOfMonth(newDate);
      break;
    }
  }

  switch (unit) {
    case TimeUnit.Month:
    case TimeUnit.Months: {
      newDate.setMonth(newDate.getMonth() + amount);

      break;
    }
    case TimeUnit.Year:
    case TimeUnit.Years: {
      newDate.setFullYear(newDate.getFullYear() + amount);

      break;
    }
  }

  switch (unit) {
    case TimeUnit.Month:
    case TimeUnit.Months:
    case TimeUnit.Year:
    case TimeUnit.Years: {
      limitLastDayOfMonth(date, newDate);

      newDate.setHours(originalHour);
      break;
    }
  }

  return newDate;
}

function limitLastDayOfMonth(date: Date, newDate: Date): void {
  const currentLastDay = date.getDate();
  const newDateLastDay = getEndOfMonth(newDate).getDate();

  if (currentLastDay > newDateLastDay) {
    newDate.setDate(newDateLastDay);
  } else {
    newDate.setDate(currentLastDay);
  }
}
