import { delay } from './delay.js';

describe('delay', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('resolves after the specified duration', async () => {
    const promise = delay(20);

    vi.advanceTimersByTime(19);
    let settled = false;

    void promise.then(() => {
      settled = true;
    });

    await Promise.resolve();
    expect(settled).toBe(false);

    vi.advanceTimersByTime(1);
    await promise;
    expect(settled).toBe(true);
  });

  it('resolves on the next tick when duration is omitted', async () => {
    const promise = delay();
    vi.runAllTimers();
    await expect(promise).resolves.toBeUndefined();
  });
});
