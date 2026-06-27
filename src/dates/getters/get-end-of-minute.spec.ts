import { setEndOfMinute } from '../setters/set-end-of-minute.js';
import { getEndOfMinute } from './get-end-of-minute.js';

describe('getEndOfMinute', () => {
  it('seconds should be set to 59 and milliseconds to 999 and the result should be a new Object', () => {
    const value = new Date(2020, 8, 3, 15, 31, 22, 123);

    const expected = new Date(2020, 8, 3, 15, 31, 59, 999);

    const result = getEndOfMinute(value);

    expect(result).toEqual(expected);

    expect(result).not.toBe(value);
  });

  it('should use the current date if none is given', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-17T14:30:22.123Z'));

    try {
      const expected = setEndOfMinute(new Date());

      const result = getEndOfMinute();

      expect(result).toEqual(expected);
    } finally {
      vi.useRealTimers();
    }
  });
});
