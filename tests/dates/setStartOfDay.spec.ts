import { setStartOfDay } from '../../src';

describe('setStartOfDay', () => {
  it('milliseconds, seconds, minutes, and hour should be set to 0', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 0, 0, 0, 0);

    expect(setStartOfDay(value)).toEqual(expected);
  });
});
