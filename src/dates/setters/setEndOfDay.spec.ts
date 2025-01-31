import { setEndOfDay } from '../..';

describe('setEndOfDay', () => {
  it('hours should be set to 23, minutes and seconds to 59, and milliseconds to 999', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 23, 59, 59, 999);

    expect(setEndOfDay(value)).toEqual(expected);
  });
});
