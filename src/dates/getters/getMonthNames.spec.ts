import { getMonthNames } from '../../../src';

describe(`getMonthNames`, () => {
  it(`Should return an array of month names`, () => {
    expect(getMonthNames()).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it(`Should return an array of month names in the locale provided`, () => {
    expect(getMonthNames({ locale: 'fr-FR' })).toEqual([
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ]);
  });

  it(`Should return an array of month names in the format provided`, () => {
    expect(getMonthNames({ format: 'short' })).toEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ]);
  });
});
