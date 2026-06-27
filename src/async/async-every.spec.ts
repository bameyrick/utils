import { asyncEvery } from './async-every.js';

describe(`asyncEvery`, () => {
  it(`should return false if not all items in the array match the predicate`, async () => {
    const result = await asyncEvery([1, 2, 3, 4, 5], value => new Promise(resolve => setTimeout(() => resolve(value % 2 === 0), 10)));

    expect(result).toBe(false);
  });

  it(`should return true if all items in the array match the predicate`, async () => {
    const result = await asyncEvery([2, 4, 6, 8, 10], value => new Promise(resolve => setTimeout(() => resolve(value % 2 === 0), 10)));

    expect(result).toBe(true);
  });
});
