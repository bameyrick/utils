import { setEndOfHour } from '../../../src';

describe('setEndOfHour', () => {
  it('minutes and seconds should be set to 59 and milliseconds to 999', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 59, 59, 999);

    expect(setEndOfHour(value)).toEqual(expected);
  });
});
