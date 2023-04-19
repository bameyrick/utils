import { TimeUnit } from '../dates';

export interface FormatTimeOptionsComplete {
  /**
   * Whether to force all units to be displayed
   */
  forceAllUnits: boolean;

  /**
   * The time unit that is being provided
   */
  timeUnit: TimeUnit;

  /**
   * The number of decimal places to display for seconds
   */
  secondsDecimalPlaces: number;

  /**
   * Whether to pad decimals with 0s to match the number provided for secondsDecimalPlaces
   */
  padDecimals: boolean;

  /**
   * The suffix to use for hours
   */
  hourSuffix: string;

  /**
   * The suffix to use for minutes
   */
  minuteSuffix: string;

  /**
   * The suffix to use for seconds
   */
  secondSuffix: string;
}

export type FormatTimeOptions = Partial<FormatTimeOptionsComplete>;
