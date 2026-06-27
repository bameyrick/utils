import { setEndOfSecond } from '../setters/set-end-of-second.js';
import { getEndOfSecond } from './get-end-of-second.js';

describe('getEndOfSecond', () => {
  it('milliseconds should be set to 999 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 22, 999);

    const result = getEndOfSecond(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-17T14:30:00.123Z'));

    try {
      const expected = setEndOfSecond(new Date());

      const result = getEndOfSecond();

      expect(result).toEqual(expected);
    } finally {
      vi.useRealTimers();
    }
  });
});
