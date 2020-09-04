import { delay } from '../../src';

describe('delay', () => {
  it('should wait for the delay to complete before continuing execution', async () => {
    let resolved = false;

    setTimeout(() => (resolved = true), 10);

    await delay(20);

    expect(resolved).toBe(true);
  });

  it('should wait for the delay to complete before continuing execution', async () => {
    let resolved = false;

    setTimeout(() => (resolved = true), 30);

    await delay(20);

    expect(resolved).toBe(false);
  });
});
