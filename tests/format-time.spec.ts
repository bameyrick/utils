import { TimeUnit } from '../src/dates';
import { formatTime, FormatTimeOptions } from '../src/format-time';

interface FormatTimeTestSuite {
  time: number;
  expected: string;
  options?: FormatTimeOptions;
}

describe(`formatTime`, () => {
  describe(`default options`, () => {
    const suites: FormatTimeTestSuite[] = [
      { time: 0, expected: `00h 00m 00s` },
      { time: 499, expected: `00h 00m 00s` },
      { time: 500, expected: `00h 00m 01s` },
      { time: 1000, expected: `00h 00m 01s` },
      { time: 1001, expected: `00h 00m 01s` },
      { time: 10000, expected: `00h 00m 10s` },
      { time: 10001, expected: `00h 00m 10s` },
      { time: 59999, expected: `00h 01m 00s` },
      { time: 60000, expected: `00h 01m 00s` },
      { time: 69999, expected: `00h 01m 10s` },
      { time: 600000, expected: `00h 10m 00s` },
      { time: 610000, expected: `00h 10m 10s` },
      { time: 3600000, expected: `01h 00m 00s` },
    ];

    runSuites(suites);
  });

  describe(`with options`, () => {
    describe(`forceAllUnits`, () => {
      const options: FormatTimeOptions = { forceAllUnits: false };
      const suites: FormatTimeTestSuite[] = [
        { time: 0, expected: `0s`, options },
        { time: 1, expected: `0s`, options },
        { time: 1000, expected: `1s`, options },
        { time: 10000, expected: `10s`, options },
        { time: 60000, expected: `1m`, options },
        { time: 60001, expected: `1m`, options },
        { time: 70000, expected: `1m 10s`, options },
        { time: 600000, expected: `10m`, options },
        { time: 601000, expected: `10m 1s`, options },
        { time: 610000, expected: `10m 10s`, options },
        { time: 3600000, expected: `1h`, options },
        { time: 3601000, expected: `1h 1s`, options },
        { time: 3610000, expected: `1h 10s`, options },
        { time: 3660000, expected: `1h 1m`, options },
        { time: 3661000, expected: `1h 1m 1s`, options },
        { time: 3670000, expected: `1h 1m 10s`, options },
        { time: 4200000, expected: `1h 10m`, options },
        { time: 4201000, expected: `1h 10m 1s`, options },
        { time: 4210000, expected: `1h 10m 10s`, options },
        { time: 36000000, expected: `10h`, options },
        { time: 36001000, expected: `10h 1s`, options },
        { time: 36010000, expected: `10h 10s`, options },
        { time: 36060000, expected: `10h 1m`, options },
        { time: 36061000, expected: `10h 1m 1s`, options },
        { time: 36070000, expected: `10h 1m 10s`, options },
        { time: 36600000, expected: `10h 10m`, options },
        { time: 36601000, expected: `10h 10m 1s`, options },
        { time: 36610000, expected: `10h 10m 10s`, options },
      ];

      runSuites(suites);
    });

    describe(`timeUnit`, () => {
      const options: FormatTimeOptions = { timeUnit: TimeUnit.Seconds };
      const suites: FormatTimeTestSuite[] = [
        { time: 0, expected: `00h 00m 00s`, options },
        { time: 0.5, expected: `00h 00m 01s`, options },
        { time: 1, expected: `00h 00m 01s`, options },
        { time: 60, expected: `00h 01m 00s`, options },
        { time: 3600, expected: `01h 00m 00s`, options },
      ];

      runSuites(suites);
    });

    describe(`secondsDecimalPlaces`, () => {
      describe(`3 decimal places`, () => {
        const suites: FormatTimeTestSuite[] = [
          { time: 0, expected: `00h 00m 00s`, options: { secondsDecimalPlaces: 3 } },
          { time: 1, expected: `00h 00m 00.001s`, options: { secondsDecimalPlaces: 3 } },
          { time: 10, expected: `00h 00m 00.01s`, options: { secondsDecimalPlaces: 3 } },
          { time: 100, expected: `00h 00m 00.1s`, options: { secondsDecimalPlaces: 3 } },
        ];

        runSuites(suites);
      });

      describe(`2 decimal places`, () => {
        const suites: FormatTimeTestSuite[] = [
          { time: 0, expected: `00h 00m 00s`, options: { secondsDecimalPlaces: 2 } },
          { time: 1, expected: `00h 00m 00s`, options: { secondsDecimalPlaces: 2 } },
          { time: 10, expected: `00h 00m 00.01s`, options: { secondsDecimalPlaces: 2 } },
          { time: 100, expected: `00h 00m 00.1s`, options: { secondsDecimalPlaces: 2 } },
        ];

        runSuites(suites);
      });

      describe(`1 decimal place`, () => {
        const suites: FormatTimeTestSuite[] = [
          { time: 0, expected: `0s`, options: { secondsDecimalPlaces: 1, forceAllUnits: false } },
          { time: 1, expected: `0s`, options: { secondsDecimalPlaces: 1, forceAllUnits: false } },
          { time: 10, expected: `0s`, options: { secondsDecimalPlaces: 1, forceAllUnits: false } },
          { time: 100, expected: `0.1s`, options: { secondsDecimalPlaces: 1, forceAllUnits: false } },
        ];

        runSuites(suites);
      });
    });

    describe(`padDecimals`, () => {
      describe(`3 decimal places`, () => {
        const suites: FormatTimeTestSuite[] = [
          { time: 0, expected: `00h 00m 00.000s`, options: { padDecimals: true, secondsDecimalPlaces: 3 } },
          { time: 1, expected: `00h 00m 00.001s`, options: { padDecimals: true, secondsDecimalPlaces: 3 } },
          { time: 10, expected: `00h 00m 00.010s`, options: { padDecimals: true, secondsDecimalPlaces: 3 } },
          { time: 100, expected: `00h 00m 00.100s`, options: { padDecimals: true, secondsDecimalPlaces: 3 } },
        ];

        runSuites(suites);
      });

      describe(`2 decimal places`, () => {
        const suites: FormatTimeTestSuite[] = [
          { time: 0, expected: `00h 00m 00.00s`, options: { padDecimals: true, secondsDecimalPlaces: 2 } },
          { time: 1, expected: `00h 00m 00.00s`, options: { padDecimals: true, secondsDecimalPlaces: 2 } },
          { time: 10, expected: `00h 00m 00.01s`, options: { padDecimals: true, secondsDecimalPlaces: 2 } },
          { time: 100, expected: `00h 00m 00.10s`, options: { padDecimals: true, secondsDecimalPlaces: 2 } },
        ];

        runSuites(suites);
      });

      describe(`1 decimal place`, () => {
        const suites: FormatTimeTestSuite[] = [
          { time: 0, expected: `00h 00m 00.0s`, options: { padDecimals: true, secondsDecimalPlaces: 1 } },
          { time: 1, expected: `00h 00m 00.0s`, options: { padDecimals: true, secondsDecimalPlaces: 1 } },
          { time: 10, expected: `00h 00m 00.0s`, options: { padDecimals: true, secondsDecimalPlaces: 1 } },
          { time: 100, expected: `00h 00m 00.1s`, options: { padDecimals: true, secondsDecimalPlaces: 1 } },
        ];

        runSuites(suites);
      });
    });

    describe(`suffixes`, () => {
      const options: FormatTimeOptions = {
        hourSuffix: ' HOURS',
        minuteSuffix: ' MINUTES',
        secondSuffix: ' SECONDS',
        secondsDecimalPlaces: 2,
        padDecimals: true,
      };

      const suites: FormatTimeTestSuite[] = [
        { time: 0, expected: `00 HOURS 00 MINUTES 00.00 SECONDS`, options },
        { time: 9, expected: `00 HOURS 00 MINUTES 00.01 SECONDS`, options },
        { time: 10, expected: `00 HOURS 00 MINUTES 00.01 SECONDS`, options },
        { time: 499, expected: `00 HOURS 00 MINUTES 00.50 SECONDS`, options },
        { time: 500, expected: `00 HOURS 00 MINUTES 00.50 SECONDS`, options },
        { time: 1000, expected: `00 HOURS 00 MINUTES 01.00 SECONDS`, options },
        { time: 1001, expected: `00 HOURS 00 MINUTES 01.00 SECONDS`, options },
        { time: 10000, expected: `00 HOURS 00 MINUTES 10.00 SECONDS`, options },
        { time: 10001, expected: `00 HOURS 00 MINUTES 10.00 SECONDS`, options },
        { time: 59999, expected: `00 HOURS 01 MINUTES 00.00 SECONDS`, options },
        { time: 60000, expected: `00 HOURS 01 MINUTES 00.00 SECONDS`, options },
        { time: 69999, expected: `00 HOURS 01 MINUTES 10.00 SECONDS`, options },
        { time: 600000, expected: `00 HOURS 10 MINUTES 00.00 SECONDS`, options },
        { time: 610000, expected: `00 HOURS 10 MINUTES 10.00 SECONDS`, options },
        { time: 3600000, expected: `01 HOURS 00 MINUTES 00.00 SECONDS`, options },
      ];

      runSuites(suites);
    });
  });
});

function runSuites(suites: FormatTimeTestSuite[]) {
  suites.forEach(({ time, expected, options }) =>
    it(`should format ${time}${options?.timeUnit ?? 'ms'} to ${expected}`, () => expect(formatTime(time, options)).toBe(expected))
  );
}
