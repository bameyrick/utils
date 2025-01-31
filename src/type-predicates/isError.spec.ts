import { isError } from './isError';

describe(`isError`, () => {
  it(`should return true if value is an Error`, () => {
    const value = new Error();

    expect(isError(value)).toBe(true);
  });

  it(`should return false if value is not an Error`, () => {
    const value = Error;

    expect(isError(value)).toBe(false);
  });
});
