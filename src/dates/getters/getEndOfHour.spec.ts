import { getEndOfHour, setEndOfHour } from '../../../src';

describe('getEndOfHour', () => {
  it('minutes and seconds should be set to 59 and milliseconds to 999 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 59, 59, 999);

    const result = getEndOfHour(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setEndOfHour(new Date());

    const result = getEndOfHour();

    expect(result).toEqual(expected);
  });
});
