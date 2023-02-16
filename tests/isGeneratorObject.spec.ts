/* eslint-disable @typescript-eslint/no-empty-function */
import { isGeneratorObject } from '../src/isGeneratorObject';

describe(`isGeneratorObject`, () => {
  it(`should return true if value is a generator object`, () => {
    const value = (function* () {})();

    expect(isGeneratorObject(value)).toBe(true);
  });

  it(`should return false if value is not a generator object`, () => {
    const value = function () {};

    expect(isGeneratorObject(value)).toBe(false);
  });
});
