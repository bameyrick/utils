import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of the given values', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
