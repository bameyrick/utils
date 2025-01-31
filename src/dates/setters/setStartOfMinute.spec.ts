import { setStartOfMinute } from '../..';

describe('setStartOfMinute', () => {
  it('milliseconds and seconds should be set to 0', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 0, 0);

    expect(setStartOfMinute(value)).toEqual(expected);
  });
});
