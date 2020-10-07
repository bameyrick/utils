import { getToday } from '../../../src';

describe('getToday', () => {
  it('should get todays date but the start of the day', () => {
    const today = new Date();

    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    expect(getToday()).toEqual(today);
  });
});
