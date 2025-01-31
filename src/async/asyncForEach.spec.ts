import { asyncForEach } from '../../src';

describe('asyncForEach', () => {
  it('should wait for the loop to finish before resolving the promise', async () => {
    let result = 0;

    await asyncForEach([10, 20, 30], value => {
      return new Promise(resolve => {
        result += value;

        setTimeout(resolve, 10);
      });
    });

    expect(result).toBe(60);
  });
});
