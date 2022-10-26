import { asyncSome } from '../../src';

describe(`asyncSome`, () => {
  it(`should return true if the predicate returns true for any value in the array`, async () => {
    const result = await asyncSome([1, 2, 3, 4, 5], value => {
      return new Promise(resolve => setTimeout(() => resolve(value % 2 === 0), 10));
    });

    expect(result).toBe(true);
  });

  it(`should return false if the predicate returns false for all values in the array`, async () => {
    const result = await asyncSome([1, 3, 5], value => {
      return new Promise(resolve => setTimeout(() => resolve(value % 2 === 0), 10));
    });

    expect(result).toBe(false);
  });
});
