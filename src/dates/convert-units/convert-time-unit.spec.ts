import { convertTimeUnit } from './convert-time-unit.js';
import { TimeUnit } from './time-unit.enum.js';

describe('convertTimeUnit', () => {
  it('should convert days into weeks', () => {
    const days = 7;
    const weeks = 1;

    expect(convertTimeUnit({ value: days, sourceUnit: TimeUnit.Days, resultUnit: TimeUnit.Weeks })).toBe(weeks);
  });

  it('should convert hours into seconds', () => {
    const hours = 2;
    const seconds = 7200;

    expect(convertTimeUnit({ value: hours, sourceUnit: TimeUnit.Hours, resultUnit: TimeUnit.Seconds })).toBe(seconds);
  });

  it('should convert weeks into days', () => {
    const weeks = 2;
    const days = 14;

    expect(convertTimeUnit({ value: weeks, sourceUnit: TimeUnit.Weeks, resultUnit: TimeUnit.Days })).toBe(days);
  });
});
