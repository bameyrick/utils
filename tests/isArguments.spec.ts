/* eslint-disable prefer-rest-params */
import { isArguments } from '../src';

const strictArgs = (function (_a, _b, _c) {
  'use strict';
  return arguments;
})(1, 2, 3);

describe(`isArguments`, () => {
  it(`should return true if value is an Arguments object`, () => {
    const value = (function () {
      return arguments;
    })();

    expect(isArguments(value)).toBe(true);
  });

  it(`should return true if value is an Arguments object (string)`, () => {
    expect(isArguments(strictArgs)).toBe(true);
  });

  it(`should return false if value is not an Arguments object`, () => {
    const value = (function () {
      return;
    })();

    expect(isArguments(value)).toBe(false);
  });
});
