import { getStartOfDay, setStartOfDay } from '../../../src';

describe('getStartOfDay', () => {
  it('milliseconds, seconds, minutes, and hour should be set to 0and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 0, 0, 0, 0);

    const result = getStartOfDay(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setStartOfDay(new Date());

    const result = getStartOfDay();

    expect(result).toEqual(expected);
  });
});
