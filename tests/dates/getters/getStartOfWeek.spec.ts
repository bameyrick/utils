import { getStartOfWeek, setStartOfWeek } from '../../../src';

describe('getStartOfWeek', () => {
  // tslint:disable-next-line: max-line-length
  it('milliseconds, seconds, minutes, and hour should be set to 0 and day to first day of week and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 7, 31, 0, 0, 0, 0);

    const result = getStartOfWeek(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('On a Sunday it should go back Monday of same week and the result should be a new Object', () => {
    const value = new Date(2020, 7, 30, 15, 31, 22, 123);

    const expected = new Date(2020, 7, 24, 0, 0, 0, 0);

    const result = getStartOfWeek(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setStartOfWeek(new Date());

    const result = getStartOfWeek();

    expect(result).toEqual(expected);
  });
});
