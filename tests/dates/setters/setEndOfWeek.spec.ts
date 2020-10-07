import { setEndOfWeek } from '../../../src';

describe('setEndOfWeek', () => {
  it('hours should be set to 23, minutes and seconds should be set to 59, milliseconds to 999, and day to last day of week', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 6, 23, 59, 59, 999);

    expect(setEndOfWeek(value)).toEqual(expected);
  });

  it('On a Monday it should go forward Sunday of same week', () => {
    const value = new Date(2020, 7, 24, 15, 31, 22, 123);

    const expected = new Date(2020, 7, 30, 23, 59, 59, 999);

    expect(setEndOfWeek(value)).toEqual(expected);
  });
});
