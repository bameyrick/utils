import { getEndOfSecond, setEndOfSecond } from '../../../src';

describe('getEndOfSecond', () => {
  it('milliseconds should be set to 999and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 22, 999);

    const result = getEndOfSecond(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setEndOfSecond(new Date());

    const result = getEndOfSecond();

    expect(result).toEqual(expected);
  });
});
