import { asyncForEach } from './async-for-each.js';

describe('asyncForEach', () => {
  it('should wait for the loop to finish before resolving the promise', async () => {
    let result = 0;

    await asyncForEach(
      [10, 20, 30],
      value =>
        new Promise(resolve => {
          result += value;

          setTimeout(resolve, 10);
        })
    );

    expect(result).toBe(60);
  });
});
