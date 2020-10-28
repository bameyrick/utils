import { getEndOfYear, setEndOfYear } from '../../../src';

describe('getEndOfYear', () => {
  it('month should be set to 11, day to 31, hours to 23, minutes and seconds should be set to 59, and milliseconds to 999and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 11, 31, 23, 59, 59, 999);

    const result = getEndOfYear(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setEndOfYear(new Date());

    const result = getEndOfYear();

    expect(result).toEqual(expected);
  });
});
