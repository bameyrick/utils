import { unitToMS, TimeUnit } from '../../../src';

describe('unitToMS', () => {
  it('convert milliseconds to milliseconds', () => {
    const value = 1234;
    const expected = 1234;

    expect(unitToMS(value, TimeUnit.Milliseconds)).toBe(expected);
  });

  it('convert seconds to milliseconds', () => {
    const value = 3;
    const expected = 3000;

    expect(unitToMS(value, TimeUnit.Seconds)).toBe(expected);
  });

  it('convert minutes to milliseconds', () => {
    const value = 12;
    const expected = 720000;

    expect(unitToMS(value, TimeUnit.Minutes)).toBe(expected);
  });

  it('convert hours to milliseconds', () => {
    const value = 22;
    const expected = 79200000;

    expect(unitToMS(value, TimeUnit.Hours)).toBe(expected);
  });

  it('convert day to milliseconds', () => {
    const value = 4;
    const expected = 345600000;

    expect(unitToMS(value, TimeUnit.Days)).toBe(expected);
  });

  it('convert weeks to milliseconds', () => {
    const value = 2.5;
    const expected = 1512000000;

    expect(unitToMS(value, TimeUnit.Weeks)).toBe(expected);
  });
});
