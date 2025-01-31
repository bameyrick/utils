import { setEndOfMonth } from '../..';

describe('setEndOfMonth', () => {
  it('hours should be set to 23, minutes and seconds to 59, milliseconds to 999, and day to the last of the month', () => {
    const value = new Date(2020, 0, 31, 15, 31, 22, 123);

    const expected = new Date(2020, 0, 31, 23, 59, 59, 999);

    expect(setEndOfMonth(value)).toEqual(expected);
  });
});
