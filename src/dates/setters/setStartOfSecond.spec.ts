import { setStartOfSecond } from '../..';

describe('setStartOfSecond', () => {
  it('milliseconds should be set to 0', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 22, 0);

    expect(setStartOfSecond(value)).toEqual(expected);
  });
});
