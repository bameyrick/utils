import { TimeUnit, convertTimeUnit, timeUnitToMilliseconds } from '../dates/index.js';
import { isNullOrUndefined } from '../type-predicates/is-null-or-undefined.js';
import { FormatTimeOptions, FormatTimeOptionsComplete } from './format-time-options.js';

/**
 * Formats a given time to a human readable string
 *
 * @param time - The time to format
 * @param options - The options to use for formatting the time
 * @returns The formatted time string
 */
const DEFAULT_FORMAT_OPTIONS: FormatTimeOptionsComplete = {
  forceAllUnits: false,
  timeUnit: TimeUnit.Milliseconds,
  secondsDecimalPlaces: 0,
  hourSuffix: 'h',
  minuteSuffix: 'm',
  secondSuffix: 's',
  padDecimals: false,
};

export function formatTime(time: number, options?: FormatTimeOptions): string {
  const { forceAllUnits, timeUnit, secondsDecimalPlaces, hourSuffix, minuteSuffix, secondSuffix, padDecimals } = options
    ? { ...DEFAULT_FORMAT_OPTIONS, ...options }
    : DEFAULT_FORMAT_OPTIONS;

  const timeMs = timeUnitToMilliseconds(time, timeUnit);

  const result: Array<string> = [];

  const hours = Math.floor(convertTimeUnit({ value: timeMs, sourceUnit: TimeUnit.Milliseconds, resultUnit: TimeUnit.Hours }));

  if (forceAllUnits || hours > 0) {
    result.push(formatUnit(hours, hourSuffix, forceAllUnits));
  }

  let minutes = Math.floor(
    convertTimeUnit({
      value: timeMs - convertTimeUnit({ value: hours, sourceUnit: TimeUnit.Hours, resultUnit: TimeUnit.Milliseconds }),
      sourceUnit: TimeUnit.Milliseconds,
      resultUnit: TimeUnit.Minutes,
    })
  );

  const secondsMultiplier = Math.pow(10, secondsDecimalPlaces);

  let seconds =
    Math.round(
      convertTimeUnit({
        value:
          timeMs -
          convertTimeUnit({ value: hours, sourceUnit: TimeUnit.Hours, resultUnit: TimeUnit.Milliseconds }) -
          convertTimeUnit({ value: minutes, sourceUnit: TimeUnit.Minutes, resultUnit: TimeUnit.Milliseconds }),
        sourceUnit: TimeUnit.Milliseconds,
        resultUnit: TimeUnit.Seconds,
      }) * secondsMultiplier
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
