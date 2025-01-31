import { convertTimeUnit, TimeUnit } from '../..';

describe('convertTimeUnit', () => {
  it('should convert days into weeks', () => {
    const days = 7;
    const weeks = 1;

    expect(convertTimeUnit(days, TimeUnit.Days, TimeUnit.Weeks)).toBe(weeks);
  });

  it('should convert hours into seconds', () => {
    const hours = 2;
    const seconds = 7200;

    expect(convertTimeUnit(hours, TimeUnit.Hours, TimeUnit.Seconds)).toBe(seconds);
  });

  it('should convert weeks into days', () => {
    const weeks = 2;
    const Days = 14;

    expect(convertTimeUnit(weeks, TimeUnit.Weeks, TimeUnit.Days)).toBe(Days);
  });
});
