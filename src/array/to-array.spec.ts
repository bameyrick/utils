import { toArray } from './to-array';

describe('toArray', () => {
  it('should return the provided value if it is already an array', () => {
    const value = ['a', 'b'];

    expect(toArray(value)).toBe(value);
  });

  it('should return the provided value in a new array if it is not already an array', () => {
    const value = 'a';

    expect(toArray(value)).toEqual([value]);
  });
});
