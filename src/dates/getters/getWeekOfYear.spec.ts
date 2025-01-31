import * as moment from 'moment';
import { getWeekOfYear } from '../../../src';

describe(`getWeekOfYear`, () => {
  it(`should get the week of the year for the given date`, () => {
    expect(getWeekOfYear(new Date(2023, 11, 30))).toEqual(52);
  });

  it(`should get the week of the year for today's date`, () => {
    expect(getWeekOfYear()).toEqual(moment().week());
  });
});
