import { setStartOfYear } from '../..';

describe('setStartOfYear', () => {
  it('milliseconds, seconds, minutes, and hour should be set to 0 and day to 1', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 0, 1, 0, 0, 0, 0);

    expect(setStartOfYear(value)).toEqual(expected);
  });
});
