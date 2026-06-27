import { timeUnitToMilliseconds } from './time-unit-to-milliseconds.js';
import { TimeUnit } from './time-unit.enum.js';

describe('timeUnitToMilliseconds', () => {
  it('convert milliseconds to milliseconds', () => {
    const value = 1234;
    const expected = 1234;

    expect(timeUnitToMilliseconds(value, TimeUnit.Millisecond)).toBe(expected);
    expect(timeUnitToMilliseconds(value, TimeUnit.Milliseconds)).toBe(expected);
  });

  it('convert seconds to milliseconds', () => {
    const value = 3;
    const expected = 3000;

    expect(timeUnitToMilliseconds(value, TimeUnit.Second)).toBe(expected);
    expect(timeUnitToMilliseconds(value, TimeUnit.Seconds)).toBe(expected);
  });

  it('convert minutes to milliseconds', () => {
    const value = 12;
    const expected = 720000;

    expect(timeUnitToMilliseconds(value, TimeUnit.Minute)).toBe(expected);
    expect(timeUnitToMilliseconds(value, TimeUnit.Minutes)).toBe(expected);
  });

  it('convert hours to milliseconds', () => {
    const value = 22;
    const expected = 79200000;

    expect(timeUnitToMilliseconds(value, TimeUnit.Hour)).toBe(expected);
    expect(timeUnitToMilliseconds(value, TimeUnit.Hours)).toBe(expected);
  });

  it('convert day to milliseconds', () => {
    const value = 4;
    const expected = 345600000;

    expect(timeUnitToMilliseconds(value, TimeUnit.Day)).toBe(expected);
    expect(timeUnitToMilliseconds(value, TimeUnit.Days)).toBe(expected);
  });

  it('convert weeks to milliseconds', () => {
    const value = 2.5;
    const expected = 1512000000;

    expect(timeUnitToMilliseconds(value, TimeUnit.Week)).toBe(expected);
    expect(timeUnitToMilliseconds(value, TimeUnit.Weeks)).toBe(expected);
  });

  it(`should throw an error if the unit is not supported`, () => {
    expect(() => timeUnitToMilliseconds(1, 'foo' as TimeUnit)).toThrow();
  });
});
