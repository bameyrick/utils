import { getStartOfSecond, setStartOfSecond } from '../../../src';

describe('getStartOfSecond', () => {
  it('milliseconds should be set to 0and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 22, 0);

    const result = getStartOfSecond(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    const expected = setStartOfSecond(new Date());

    const result = getStartOfSecond();

    expect(result).toEqual(expected);
  });
});
