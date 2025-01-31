import { isSameDate, TimeUnit } from '../..';

describe(`datesAreSame`, () => {
  describe('year', () => {
    it('should return true if the years are the same', () => {
      expect(isSameDate(new Date(2023, 2, 26, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0), TimeUnit.Year)).toBe(true);
    });

    it('should return false if the years are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 26, 0, 0, 0, 0), new Date(2022, 2, 27, 0, 0, 0, 0), TimeUnit.Year)).toBe(false);
    });
  });

  describe('month', () => {
    it('should return true if the months are the same', () => {
      expect(isSameDate(new Date(2023, 2, 26, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0), TimeUnit.Month)).toBe(true);
    });

    it('should return false if the months are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 26, 0, 0, 0, 0), new Date(2023, 3, 27, 0, 0, 0, 0), TimeUnit.Month)).toBe(false);
    });
  });

  describe('week', () => {
    it('should return true if the weeks are the same', () => {
      expect(isSameDate(new Date(2023, 2, 28, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0), TimeUnit.Week)).toBe(true);
    });

    it('should return false if the weeks are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 16, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0), TimeUnit.Week)).toBe(false);
    });
  });

  describe('day', () => {
    it('should return true if the days are the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 12, 0, 0, 0), TimeUnit.Day)).toBe(true);
    });

    it('should return false if the days are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 28, 0, 0, 0, 0), TimeUnit.Day)).toBe(false);
    });
  });

  describe('hour', () => {
    it('should return true if the hours are the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0), TimeUnit.Hour)).toBe(true);
    });

    it('should return false if the hours are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 12, 0, 0, 0), TimeUnit.Hour)).toBe(false);
    });

    it('should return true if the hours are the same (BST)', () => {
      expect(isSameDate(new Date(2023, 2, 26, 1, 0, 0, 0), new Date(2023, 2, 26, 2, 0, 0, 0), TimeUnit.Hour)).toBe(true);
    });
  });

  describe('minute', () => {
    it('should return true if the minutes are the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0), TimeUnit.Minute)).toBe(true);
    });

    it('should return false if the minutes are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 1, 0, 0), TimeUnit.Minute)).toBe(false);
    });
  });

  describe('second', () => {
    it('should return true if the seconds are the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0), TimeUnit.Second)).toBe(true);
    });

    it('should return false if the seconds are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 1, 0), TimeUnit.Second)).toBe(false);
    });
  });

  describe('millisecond', () => {
    it('should return true if the milliseconds are the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 0))).toBe(true);
    });

    it('should return false if the milliseconds are not the same', () => {
      expect(isSameDate(new Date(2023, 2, 27, 0, 0, 0, 0), new Date(2023, 2, 27, 0, 0, 0, 1))).toBe(false);
    });
  });
});
