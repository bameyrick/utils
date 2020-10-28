import { getStartOfMinute, setStartOfMinute } from '../../../src';

describe('getStartOfMinute', () => {
  it('milliseconds and seconds should be set to 0 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 0, 0);

    const result = getStartOfMinute(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setStartOfMinute(new Date());

    const result = getStartOfMinute();

    expect(result).toEqual(expected);
  });
});
