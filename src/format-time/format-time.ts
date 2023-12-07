import { TimeUnit, convertTimeUnit, unitToMS } from '../dates/index.js';
import { isNullOrUndefined } from '../isNullOrUndefined.js';
import { FormatTimeOptions, FormatTimeOptionsComplete } from './format-time-options.js';

/**
 * Formats a given time to a human readable string
 */
export function formatTime(time: number, options?: FormatTimeOptions): string {
  const defaultOptions: FormatTimeOptionsComplete = {
    forceAllUnits: true,
    timeUnit: TimeUnit.Milliseconds,
    secondsDecimalPlaces: 0,
    hourSuffix: 'h',
    minuteSuffix: 'm',
    secondSuffix: 's',
    padDecimals: false,
  };

  const { forceAllUnits, timeUnit, secondsDecimalPlaces, hourSuffix, minuteSuffix, secondSuffix, padDecimals } = {
    ...defaultOptions,
    ...options,
  };

  const timeMs = unitToMS(time, timeUnit);

  const result: Array<string> = [];

  const hours = Math.floor(convertTimeUnit(timeMs, TimeUnit.Milliseconds, TimeUnit.Hours));

  if (forceAllUnits || hours > 0) {
    result.push(formatUnit(hours, hourSuffix, forceAllUnits));
  }

  let minutes = Math.floor(
    convertTimeUnit(timeMs - convertTimeUnit(hours, TimeUnit.Hours, TimeUnit.Milliseconds), TimeUnit.Milliseconds, TimeUnit.Minutes)
  );

  const secondsMultiplier = Math.pow(10, secondsDecimalPlaces);

  let seconds =
    Math.round(
      convertTimeUnit(
        timeMs -
          convertTimeUnit(hours, TimeUnit.Hours, TimeUnit.Milliseconds) -
          convertTimeUnit(minutes, TimeUnit.Minutes, TimeUnit.Milliseconds),
        TimeUnit.Milliseconds,
        TimeUnit.Seconds
      ) * secondsMultiplier
    ) / secondsMultiplier;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (forceAllUnits || minutes > 0) {
    result.push(formatUnit(minutes, minuteSuffix, forceAllUnits));
  }

  if (forceAllUnits || seconds > 0 || (seconds === 0 && minutes === 0 && hours == 0)) {
    result.push(formatUnit(seconds, secondSuffix, forceAllUnits, secondsDecimalPlaces, padDecimals));
  }

  return result.join(' ');
}

/**
 * Formats time units
 */
function formatUnit(time: number, unit: string, forceAllUnits: boolean, secondsDecimalPlaces?: number, padDecimals?: boolean): string {
  let result = `${time}`;

  if (secondsDecimalPlaces && secondsDecimalPlaces > 0) {
    const parts = result.split('.');
    let seconds = parts[0];
    const decimals = parts[1];

    if (forceAllUnits) {
      seconds = seconds.padStart(2, '0');
    }

    if (padDecimals) {
      result = `${seconds}.${(parts[1] ?? '0').padEnd(secondsDecimalPlaces, '0')}`;
    } else if (isNullOrUndefined(decimals)) {
      result = seconds;
    } else {
      result = `${seconds}.${decimals}`;
    }
  } else if (forceAllUnits) {
    result = result.padStart(2, '0');
  }

  result += unit;

  return result;
}
