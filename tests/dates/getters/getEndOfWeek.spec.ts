import { getEndOfWeek, setEndOfWeek } from '../../../src';

describe('getEndOfWeek', () => {
  it('hours should be set to 23, minutes and seconds should be set to 59, milliseconds to 999, and day to last day of weekand the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 6, 23, 59, 59, 999);

    const result = getEndOfWeek(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('On a Monday it should go forward Sunday of same weekand the result should be a new Object', () => {
    const value = new Date(2020, 7, 24, 15, 31, 22, 123);

    const expected = new Date(2020, 7, 30, 23, 59, 59, 999);

    const result = getEndOfWeek(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setEndOfWeek(new Date());

    const result = getEndOfWeek();

    expect(result).toEqual(expected);
  });
});
