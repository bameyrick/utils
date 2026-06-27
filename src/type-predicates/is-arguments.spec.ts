import { isArguments } from './is-arguments.js';

describe(`isArguments`, () => {
  it(`should return true if value is an Arguments object`, () => {
    const value = (function () {
      // eslint-disable-next-line prefer-rest-params
      return arguments;
    })();

    expect(isArguments(value)).toBe(true);
  });

  it(`should return true if value is an Arguments object (string)`, () => {
    const strictArgs = (function (_a, _b, _c) {
      'use strict';
      // eslint-disable-next-line prefer-rest-params
      return arguments;
    })(1, 2, 3);

    expect(isArguments(strictArgs)).toBe(true);
  });

  it(`should return false if value is not an Arguments object`, () => {
    const value = (function () {
      return;
    })();

    expect(isArguments(value)).toBe(false);
  });
});
