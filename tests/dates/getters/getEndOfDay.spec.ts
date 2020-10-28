import { getEndOfDay, setEndOfDay } from '../../../src';

describe('getEndOfDay', () => {
  it('hours should be set to 23, minutes and seconds to 59, and milliseconds to 999 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 23, 59, 59, 999);

    const result = getEndOfDay(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setEndOfDay(new Date());

    const result = getEndOfDay();

    expect(result).toEqual(expected);
  });
});
