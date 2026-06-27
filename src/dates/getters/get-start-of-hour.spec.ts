import { setStartOfHour } from '../setters/set-start-of-hour.js';
import { getStartOfHour } from './get-start-of-hour.js';

describe('getStartOfHour', () => {
  it('milliseconds, seconds, and minutes should be set to 0 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 0, 0, 0);

    const result = getStartOfHour(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-17T14:30:22.123Z'));

    try {
      const expected = setStartOfHour(new Date());

      const result = getStartOfHour();

      expect(result).toEqual(expected);
    } finally {
      vi.useRealTimers();
    }
  });
});
