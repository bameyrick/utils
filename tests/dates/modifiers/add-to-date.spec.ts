import { TimeUnit, addToDate } from '../../../src';
import { generateDateModifierTestSuites } from './date-modifiers-test-suites';

describe(`addToDate`, () => {
  it(`should not overwrite the provided date`, () => {
    const date = new Date(2023, 2, 27, 0, 0, 0, 0);
    const original = new Date(date.getTime());

    addToDate(date, 1, TimeUnit.Millisecond);

    expect(date).toEqual(original);
  });

  generateDateModifierTestSuites(addToDate, 'add', 'to');

  describe(`Docs BST examples`, () => {
    it('Adding a month will add the specified number of months to the date.', () => {
      const date = new Date('2023-02-28T00:00:00.000');

      expect(addToDate(date, 1, TimeUnit.Month)).toEqual(new Date('2023-03-28T00:00:00.000'));
    });

    it(`Should maintain hour when crossing into daylight savings time`, () => {
      const date = new Date('2023-03-25T06:00:00.000');

      expect(addToDate(date, 1, TimeUnit.Day).getHours()).toEqual(6);
    });

    it(`Adding hours, minutes, seconds, or milliseconds, should result in a different hour`, () => {
      const date = new Date('2023-03-25T06:00:00.000');

      expect(addToDate(date, 24, TimeUnit.Hours).getHours()).toEqual(7);
    });
  });
});
