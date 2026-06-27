import { setStartOfYear } from '../setters/set-start-of-year.js';
import { getStartOfYear } from './get-start-of-year.js';

describe('getStartOfYear', () => {
  it('milliseconds, seconds, minutes, and hour should be set to 0 and day to 1 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 0, 1, 0, 0, 0, 0);

    const result = getStartOfYear(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-17T14:30:22.123Z'));

    try {
      const expected = setStartOfYear(new Date());

      const result = getStartOfYear();

      expect(result).toEqual(expected);
    } finally {
      vi.useRealTimers();
    }
  });
});
