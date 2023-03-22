import { msToUnit, TimeUnit } from '../../../src';

describe('msToUnit', () => {
  it('convert milliseconds to milliseconds', () => {
    const value = 1234;
    const expected = 1234;

    expect(msToUnit(value, TimeUnit.Millisecond)).toBe(expected);
    expect(msToUnit(value, TimeUnit.Milliseconds)).toBe(expected);
  });

  it('convert milliseconds to seconds', () => {
    const value = 3000;
    const expected = 3;

    expect(msToUnit(value, TimeUnit.Second)).toBe(expected);
    expect(msToUnit(value, TimeUnit.Seconds)).toBe(expected);
  });

  it('convert milliseconds to minutes', () => {
    const value = 720000;
    const expected = 12;

    expect(msToUnit(value, TimeUnit.Minute)).toBe(expected);
    expect(msToUnit(value, TimeUnit.Minutes)).toBe(expected);
  });

  it('convert milliseconds to hours', () => {
    const value = 79200000;
    const expected = 22;

    expect(msToUnit(value, TimeUnit.Hour)).toBe(expected);
    expect(msToUnit(value, TimeUnit.Hours)).toBe(expected);
  });

  it('convert milliseconds to day', () => {
    const value = 345600000;
    const expected = 4;

    expect(msToUnit(value, TimeUnit.Day)).toBe(expected);
    expect(msToUnit(value, TimeUnit.Days)).toBe(expected);
  });

  it('convert milliseconds to weeks', () => {
    const value = 1512000000;
    const expected = 2.5;

    expect(msToUnit(value, TimeUnit.Week)).toBe(expected);
    expect(msToUnit(value, TimeUnit.Weeks)).toBe(expected);
  });

  it(`should throw an error if the unit is not supported`, () => {
    expect(() => msToUnit(1, 'foo' as TimeUnit)).toThrowError();
  });
});
