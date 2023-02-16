import { isRegExp } from '../src/isRegExp';

describe(`isRegExp`, () => {
  it(`should return true if value is a RegExp`, () => {
    const value = /x/;

    expect(isRegExp(value)).toBe(true);
  });

  it(`should return true if value is a RegExp (constructor)`, () => {
    const value = new RegExp('x');

    expect(isRegExp(value)).toBe(true);
  });

  it(`should return false if value is not a RegExp`, () => {
    const value = RegExp;

    expect(isRegExp(value)).toBe(false);
  });

  it(`should return false if value is a string`, () => {
    const value = '/x/';

    expect(isRegExp(value)).toBe(false);
  });
});
