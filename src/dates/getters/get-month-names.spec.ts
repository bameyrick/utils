import { getMonthNames } from './get-month-names.js';

describe(`getMonthNames`, () => {
  it(`Should return an array of month names`, () => {
    expect(getMonthNames({ locale: 'en-US' })).toEqual([
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
    expect(getMonthNames({ locale: 'en-US', format: 'short' })).toEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]);
  });
});
