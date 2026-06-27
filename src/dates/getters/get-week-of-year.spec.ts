import { getWeekOfYear } from './get-week-of-year.js';

describe(`getWeekOfYear`, () => {
  describe(`year where Jan 1 falls on Sunday (2023)`, () => {
    it(`Jan 1 (Sunday, sole day of week 1) is week 1`, () => expect(getWeekOfYear(new Date(2023, 0, 1))).toEqual(1));
    it(`Jan 2 (Monday, start of week 2) is week 2`, () => expect(getWeekOfYear(new Date(2023, 0, 2))).toEqual(2));
    it(`Jan 8 (Sunday, last day of week 2) is week 2`, () => expect(getWeekOfYear(new Date(2023, 0, 8))).toEqual(2));
    it(`Dec 30 is week 53`, () => expect(getWeekOfYear(new Date(2023, 11, 30))).toEqual(53));
    it(`Dec 31 is week 53`, () => expect(getWeekOfYear(new Date(2023, 11, 31))).toEqual(53));
  });

  describe(`year where Jan 1 falls on Monday (2024, leap year)`, () => {
    it(`Jan 1 is week 1`, () => expect(getWeekOfYear(new Date(2024, 0, 1))).toEqual(1));
    it(`Jan 7 (Sunday, last day of week 1) is week 1`, () => expect(getWeekOfYear(new Date(2024, 0, 7))).toEqual(1));
    it(`Jan 8 (Monday, start of week 2) is week 2`, () => expect(getWeekOfYear(new Date(2024, 0, 8))).toEqual(2));
    it(`Dec 29 (Sunday, last day of week 52) is week 52`, () => expect(getWeekOfYear(new Date(2024, 11, 29))).toEqual(52));
    it(`Dec 30 (Monday, start of week 53) is week 53`, () => expect(getWeekOfYear(new Date(2024, 11, 30))).toEqual(53));
  });

  describe(`year where Jan 1 falls on Wednesday (2025)`, () => {
    it(`Jan 1 is week 1`, () => expect(getWeekOfYear(new Date(2025, 0, 1))).toEqual(1));
    it(`Jan 5 (Sunday, last day of week 1) is week 1`, () => expect(getWeekOfYear(new Date(2025, 0, 5))).toEqual(1));
    it(`Jan 6 (Monday, start of week 2) is week 2`, () => expect(getWeekOfYear(new Date(2025, 0, 6))).toEqual(2));
    it(`Dec 28 (Sunday, last day of week 52) is week 52`, () => expect(getWeekOfYear(new Date(2025, 11, 28))).toEqual(52));
    it(`Dec 29 (Monday, start of week 53) is week 53`, () => expect(getWeekOfYear(new Date(2025, 11, 29))).toEqual(53));
  });

  describe(`year where Jan 1 falls on Saturday (2022)`, () => {
    it(`Jan 1 is week 1`, () => expect(getWeekOfYear(new Date(2022, 0, 1))).toEqual(1));
    it(`Jan 2 (Sunday, last day of week 1) is week 1`, () => expect(getWeekOfYear(new Date(2022, 0, 2))).toEqual(1));
    it(`Jan 3 (Monday, start of week 2) is week 2`, () => expect(getWeekOfYear(new Date(2022, 0, 3))).toEqual(2));
    it(`Dec 25 (Sunday, last day of week 52) is week 52`, () => expect(getWeekOfYear(new Date(2022, 11, 25))).toEqual(52));
    it(`Dec 26 (Monday, start of week 53) is week 53`, () => expect(getWeekOfYear(new Date(2022, 11, 26))).toEqual(53));
    it(`Dec 31 is week 53`, () => expect(getWeekOfYear(new Date(2022, 11, 31))).toEqual(53));
  });

  it(`should use today's date if none is provided`, () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2024, 0, 8, 12, 0, 0, 0));

    try {
      expect(getWeekOfYear()).toEqual(2);
    } finally {
      vi.useRealTimers();
    }
  });
});
