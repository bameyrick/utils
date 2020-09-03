import { isNullOrUndefined } from '../src';

describe(`isNullOrUndefined`, () => {
  it(`should return true if value is null`, () => {
    const value = null;

    expect(isNullOrUndefined(value)).toBe(true);
  });

  it(`should return true if value is undefined`, () => {
    const value = undefined;

    expect(isNullOrUndefined(value)).toBe(true);
  });

  it(`should return false if value is 'undefined'`, () => {
    const value = 'undefined';

    expect(isNullOrUndefined(value)).toBe(false);
  });

  it(`should return false if value is empty string'`, () => {
    const value = '';

    expect(isNullOrUndefined(value)).toBe(false);
  });

  it(`should return false if value is 0'`, () => {
    const value = 0;

    expect(isNullOrUndefined(value)).toBe(false);
  });

  it(`should return true if value is not set'`, () => {
    // tslint:disable-next-line: prefer-const
    let value: void;

    expect(isNullOrUndefined(value)).toBe(true);
  });
});
