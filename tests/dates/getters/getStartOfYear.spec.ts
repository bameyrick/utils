import { getStartOfYear, setStartOfYear } from '../../../src';

describe('getStartOfYear', () => {
  it('milliseconds, seconds, minutes, and hour should be set to 0 and day to 1and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 0, 1, 0, 0, 0, 0);

    const result = getStartOfYear(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setStartOfYear(new Date());

    const result = getStartOfYear();

    expect(result).toEqual(expected);
  });
});
