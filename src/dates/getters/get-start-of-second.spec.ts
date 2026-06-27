import { setStartOfSecond } from '../setters/set-start-of-second.js';
import { getStartOfSecond } from './get-start-of-second.js';

describe('getStartOfSecond', () => {
  it('milliseconds should be set to 0 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 22, 0);

    const result = getStartOfSecond(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-17T14:30:00.123Z'));

    try {
      const expected = setStartOfSecond(new Date());

      const result = getStartOfSecond();

      expect(result).toEqual(expected);
    } finally {
      vi.useRealTimers();
    }
  });
});
