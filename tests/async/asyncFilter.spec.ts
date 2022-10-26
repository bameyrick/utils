import { asyncFilter } from '../../src';

describe(`asyncFilter`, () => {
  it(`should filter the array`, async () => {
    const result = await asyncFilter([1, 2, 3, 4, 5], value => {
      return new Promise(resolve => setTimeout(() => resolve(value % 2 === 0), 10));
    });

    expect(result).toEqual([2, 4]);
  });
});
