import { setEndOfYear } from '../..';

describe('setEndOfYear', () => {
  it('month should be set to 11, day to 31, hours to 23, minutes and seconds should be set to 59, and milliseconds to 999', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 11, 31, 23, 59, 59, 999);

    expect(setEndOfYear(value)).toEqual(expected);
  });
});
