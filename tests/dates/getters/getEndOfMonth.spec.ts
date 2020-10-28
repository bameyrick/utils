import { getEndOfMonth, setEndOfMonth } from '../../../src';

describe('getEndOfMonth', () => {
  it('hours should be set to 23, minutes and seconds to 59, milliseconds to 999, and day to the last of the month and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 30, 23, 59, 59, 999);

    const result = getEndOfMonth(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setEndOfMonth(new Date());

    const result = getEndOfMonth();

    expect(result).toEqual(expected);
  });
});
