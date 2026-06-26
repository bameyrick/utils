import { isArray } from './isArray.js';

describe('isArray', () => {
  it('should return true if value is an Array', () => {
    const value: never[] = [];

    expect(isArray(value)).toBe(true);
  });

  it('should return false if value is not an Array', () => {
    const value = {};

    expect(isArray(value)).toBe(false);
  });
});
