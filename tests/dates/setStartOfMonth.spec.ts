import { setStartOfMonth } from '../../src';

describe('setStartOfMonth', () => {
  it('milliseconds, seconds, minutes, and hour should be set to 0 and day to 1', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 1, 0, 0, 0, 0);

    expect(setStartOfMonth(value)).toEqual(expected);
  });
});
