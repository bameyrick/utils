import { average } from './average';

describe('average', () => {
  it('should return the average of the given values', () => {
    expect(average([1, 2, 3])).toBe(2);
  });

  it('should throw an error when given an empty array', () => {
    expect(() => average([])).toThrow(new Error('Cannot calculate average of an empty array'));
  });

  it('should handle negative numbers', () => {
    expect(average([-1, -2, -3])).toBe(-2);
  });

  it('should handle mixed positive and negative numbers', () => {
    expect(average([-1, 0, 1])).toBe(0);
  });
});
