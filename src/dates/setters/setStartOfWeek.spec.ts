import { setStartOfWeek } from '../..';

describe('setStartOfWeek', () => {
  it('milliseconds, seconds, minutes, and hour should be set to 0 and day to first day of week', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 7, 31, 0, 0, 0, 0);

    expect(setStartOfWeek(value)).toEqual(expected);
  });

  it('On a Sunday it should go back Monday of same week', () => {
    const value = new Date(2020, 7, 30, 15, 31, 22, 123);

    const expected = new Date(2020, 7, 24, 0, 0, 0, 0);

    expect(setStartOfWeek(value)).toEqual(expected);
  });
});
