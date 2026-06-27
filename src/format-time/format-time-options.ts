import { TimeUnit } from '../dates/index.js';

export interface FormatTimeOptionsComplete {
  /**
   * Whether to force all units to be displayed
   */
  readonly forceAllUnits: boolean;

  /**
   * The time unit that is being provided
   */
  readonly timeUnit: TimeUnit;

  /**
   * The number of decimal places to display for seconds
   */
  readonly secondsDecimalPlaces: number;

  /**
   * Whether to pad decimals with 0s to match the number provided for secondsDecimalPlaces
   */
  readonly padDecimals: boolean;

  /**
   * The suffix to use for hours
   */
  readonly hourSuffix: string;

  /**
   * The suffix to use for minutes
   */
  readonly minuteSuffix: string;

  /**
   * The suffix to use for seconds
   */
  readonly secondSuffix: string;
}

export type FormatTimeOptions = Partial<FormatTimeOptionsComplete>;
