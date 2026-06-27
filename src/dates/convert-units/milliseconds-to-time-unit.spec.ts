import { millisecondsToTimeUnit } from './milliseconds-to-time-unit.js';
import { TimeUnit } from './time-unit.enum.js';

describe('millisecondsToTimeUnit', () => {
  it('convert milliseconds to milliseconds', () => {
    const value = 1234;
    const expected = 1234;

    expect(millisecondsToTimeUnit(value, TimeUnit.Millisecond)).toBe(expected);
    expect(millisecondsToTimeUnit(value, TimeUnit.Milliseconds)).toBe(expected);
  });

  it('convert milliseconds to seconds', () => {
    const value = 3000;
    const expected = 3;

    expect(millisecondsToTimeUnit(value, TimeUnit.Second)).toBe(expected);
    expect(millisecondsToTimeUnit(value, TimeUnit.Seconds)).toBe(expected);
  });

  it('convert milliseconds to minutes', () => {
    const value = 720000;
    const expected = 12;

    expect(millisecondsToTimeUnit(value, TimeUnit.Minute)).toBe(expected);
    expect(millisecondsToTimeUnit(value, TimeUnit.Minutes)).toBe(expected);
  });

  it('convert milliseconds to hours', () => {
    const value = 79200000;
    const expected = 22;

    expect(millisecondsToTimeUnit(value, TimeUnit.Hour)).toBe(expected);
    expect(millisecondsToTimeUnit(value, TimeUnit.Hours)).toBe(expected);
  });

  it('convert milliseconds to day', () => {
    const value = 345600000;
    const expected = 4;

    expect(millisecondsToTimeUnit(value, TimeUnit.Day)).toBe(expected);
    expect(millisecondsToTimeUnit(value, TimeUnit.Days)).toBe(expected);
  });

  it('convert milliseconds to weeks', () => {
    const value = 1512000000;
    const expected = 2.5;

    expect(millisecondsToTimeUnit(value, TimeUnit.Week)).toBe(expected);
    expect(millisecondsToTimeUnit(value, TimeUnit.Weeks)).toBe(expected);
  });

  it(`should throw an error if the unit is not supported`, () => {
    expect(() => millisecondsToTimeUnit(1, 'foo' as TimeUnit)).toThrow();
  });
});
