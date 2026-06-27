import { compareDates, DateComparator, TimeUnit } from '../..';

describe(`compareDates`, () => {
  describe(`Same`, () => {
    describe(`year`, () => {
      it(`should return true if the years are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Year,
          })
        ).toBe(true);
      });

      it(`should return false if the years are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2022, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Year,
          })
        ).toBe(false);
      });
    });

    describe(`month`, () => {
      it(`should return true if the months are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Month,
          })
        ).toBe(true);
      });

      it(`should return false if the months are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 3, 27, 0, 0, 0, 0),
            unit: TimeUnit.Month,
          })
        ).toBe(false);
      });
    });

    describe(`week`, () => {
      it(`should return true if the weeks are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 28, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Week,
          })
        ).toBe(true);
      });

      it(`should return false if the weeks are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 16, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Week,
          })
        ).toBe(false);
      });
    });

    describe(`day`, () => {
      it(`should return true if the days are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 12, 0, 0, 0),
            unit: TimeUnit.Day,
          })
        ).toBe(true);
      });

      it(`should return false if the days are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 28, 0, 0, 0, 0),
            unit: TimeUnit.Day,
          })
        ).toBe(false);
      });
    });

    describe(`hour`, () => {
      it(`should return true if the hours are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Hour,
          })
        ).toBe(true);
      });

      it(`should return false if the hours are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 12, 0, 0, 0),
            unit: TimeUnit.Hour,
          })
        ).toBe(false);
      });

      it(`should return true if the hours are the same (BST)`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 1, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 26, 2, 0, 0, 0),
            unit: TimeUnit.Hour,
          })
        ).toBe(true);
      });
    });

    describe(`minute`, () => {
      it(`should return true if the minutes are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Minute,
          })
        ).toBe(true);
      });

      it(`should return false if the minutes are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 1, 0, 0),
            unit: TimeUnit.Minute,
          })
        ).toBe(false);
      });
    });

    describe(`second`, () => {
      it(`should return true if the seconds are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Second,
          })
        ).toBe(true);
      });

      it(`should return false if the seconds are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 1, 0),
            unit: TimeUnit.Second,
          })
        ).toBe(false);
      });
    });

    describe(`millisecond`, () => {
      it(`should return true if the milliseconds are the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Millisecond,
          })
        ).toBe(true);
      });

      it(`should return false if the milliseconds are not the same`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Same,
            b: new Date(2023, 2, 27, 0, 0, 0, 1),
            unit: TimeUnit.Millisecond,
          })
        ).toBe(false);
      });
    });
  });

  describe(`Before`, () => {
    describe(`year`, () => {
      it(`should return true if the years are before`, () => {
        expect(
          compareDates({
            a: new Date(2022, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Year,
          })
        ).toBe(true);
      });

      it(`should return false if the years are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2022, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Year,
          })
        ).toBe(false);
      });
    });

    describe(`month`, () => {
      it(`should return true if the months are before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 1, 26, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Month,
          })
        ).toBe(true);
      });

      it(`should return false if the months are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 3, 26, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 3, 27, 0, 0, 0, 0),
            unit: TimeUnit.Month,
          })
        ).toBe(false);
      });
    });

    describe(`week`, () => {
      it(`should return true if the weeks are before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 15, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Week,
          })
        ).toBe(true);
      });

      it(`should return false if the weeks are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 28, 0, 0, 0, 0),
            unit: TimeUnit.Week,
          })
        ).toBe(false);
      });
    });

    describe(`day`, () => {
      it(`should return true if the days are before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 12, 0, 0, 0),
            unit: TimeUnit.Day,
          })
        ).toBe(true);
      });

      it(`should return false if the days are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 28, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 28, 0, 0, 0, 0),
            unit: TimeUnit.Day,
          })
        ).toBe(false);
      });
    });

    describe(`hour`, () => {
      it(`should return true if the hours are before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 1, 0, 0, 0),
            unit: TimeUnit.Hour,
          })
        ).toBe(true);
      });

      it(`should return false if the hours are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 12, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 12, 0, 0, 0),
            unit: TimeUnit.Hour,
          })
        ).toBe(false);
      });

      it(`should return true if the hours are before (BST)`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 26, 2, 0, 0, 0),
            unit: TimeUnit.Hour,
          })
        ).toBe(true);
      });
    });

    describe(`minute`, () => {
      it(`should return true if the minutes are before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 1, 0, 0),
            unit: TimeUnit.Minute,
          })
        ).toBe(true);
      });

      it(`should return false if the minutes are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Minute,
          })
        ).toBe(false);
      });
    });

    describe(`second`, () => {
      it(`should return true if the seconds are before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 1, 0),
            unit: TimeUnit.Second,
          })
        ).toBe(true);
      });

      it(`should return false if the seconds are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Second,
          })
        ).toBe(false);
      });
    });

    describe(`millisecond`, () => {
      it(`should return true if the milliseconds are before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 0, 1),
            unit: TimeUnit.Millisecond,
          })
        ).toBe(true);
      });

      it(`should return false if the milliseconds are not before`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.Before,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Millisecond,
          })
        ).toBe(false);
      });
    });
  });

  describe(`After`, () => {
    describe(`year`, () => {
      it(`should return true if the years are after`, () => {
        expect(
          compareDates({
            a: new Date(2024, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Years,
          })
        ).toBe(true);
      });

      it(`should return false if the years are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2024, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Years,
          })
        ).toBe(false);
      });
    });

    describe(`month`, () => {
      it(`should return true if the months are after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 3, 26, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Months,
          })
        ).toBe(true);
      });

      it(`should return false if the months are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 3, 27, 0, 0, 0, 0),
            unit: TimeUnit.Months,
          })
        ).toBe(false);
      });
    });

    describe(`week`, () => {
      it(`should return true if the weeks are after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 3, 15, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Weeks,
          })
        ).toBe(true);
      });

      it(`should return false if the weeks are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 28, 0, 0, 0, 0),
            unit: TimeUnit.Weeks,
          })
        ).toBe(false);
      });
    });

    describe(`day`, () => {
      it(`should return true if the days are after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 28, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 12, 0, 0, 0),
            unit: TimeUnit.Days,
          })
        ).toBe(true);
      });

      it(`should return false if the days are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 28, 0, 0, 0, 0),
            unit: TimeUnit.Days,
          })
        ).toBe(false);
      });
    });

    describe(`hour`, () => {
      it(`should return true if the hours are after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 1, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Hours,
          })
        ).toBe(true);
      });

      it(`should return false if the hours are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 11, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 12, 0, 0, 0),
            unit: TimeUnit.Hours,
          })
        ).toBe(false);
      });

      it(`should return true if the hours are after (BST)`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 26, 3, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 26, 2, 0, 0, 0),
            unit: TimeUnit.Hours,
          })
        ).toBe(true);
      });
    });

    describe(`minute`, () => {
      it(`should return true if the minutes are after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 1, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Minutes,
          })
        ).toBe(true);
      });

      it(`should return false if the minutes are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 1, 0, 0),
            unit: TimeUnit.Minutes,
          })
        ).toBe(false);
      });
    });

    describe(`second`, () => {
      it(`should return true if the seconds are after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 1, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Seconds,
          })
        ).toBe(true);
      });

      it(`should return false if the seconds are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Seconds,
          })
        ).toBe(false);
      });
    });

    describe(`millisecond`, () => {
      it(`should return true if the milliseconds are after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 2),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 1),
            unit: TimeUnit.Milliseconds,
          })
        ).toBe(true);
      });

      it(`should return false if the milliseconds are not after`, () => {
        expect(
          compareDates({
            a: new Date(2023, 2, 27, 0, 0, 0, 0),
            comparator: DateComparator.After,
            b: new Date(2023, 2, 27, 0, 0, 0, 0),
            unit: TimeUnit.Milliseconds,
          })
        ).toBe(false);
      });
    });
  });
});
