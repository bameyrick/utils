import { setEndOfSecond } from '../../../src';

describe('setEndOfSecond', () => {
  it('milliseconds should be set to 999', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 22, 999);

    expect(setEndOfSecond(value)).toEqual(expected);
  });
});
