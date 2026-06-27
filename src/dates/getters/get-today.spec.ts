import { getToday } from './get-today.js';

describe('getToday', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-17T14:30:00.000Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it(`should get today's date but the start of the day`, () => {
    const today = new Date('2025-06-17T14:30:00.000Z');

    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    expect(getToday()).toEqual(today);
  });
});
