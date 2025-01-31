import { setStartOfHour } from '../..';

describe('setStartOfHour', () => {
  it('milliseconds, seconds, and minutes should be set to 0', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 0, 0, 0);

    expect(setStartOfHour(value)).toEqual(expected);
  });
});
