import { isNullOrUndefined } from './is-null-or-undefined.js';

describe('isNullOrUndefined', () => {
  it('returns true for null', () => {
    expect(isNullOrUndefined(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isNullOrUndefined(undefined)).toBe(true);
  });

  it('should return true if value is not set', () => {
    // eslint-disable-next-line no-unassigned-vars
    let value: void;

    expect(isNullOrUndefined(value)).toBe(true);
  });

  it('should return false if value is an object', () => {
    const value = {};

    expect(isNullOrUndefined(value)).toBe(false);
  });

  it('should return false if value is "undefined"', () => {
    const value = 'undefined';

    expect(isNullOrUndefined(value)).toBe(false);
  });

  it('should return false if value is "null"', () => {
    const value = 'null';

    expect(isNullOrUndefined(value)).toBe(false);
  });

  it('should return false for non null or undefined values', () => {
    expect(isNullOrUndefined([])).toBe(false);

    expect(isNullOrUndefined(() => {})).toBe(false);
    expect(isNullOrUndefined(Symbol('test'))).toBe(false);
    expect(isNullOrUndefined(true)).toBe(false);
    expect(isNullOrUndefined(false)).toBe(false);
    expect(isNullOrUndefined(0)).toBe(false);
    expect(isNullOrUndefined(-0)).toBe(false);
    expect(isNullOrUndefined(NaN)).toBe(false);
    expect(isNullOrUndefined(Infinity)).toBe(false);
    expect(isNullOrUndefined(-Infinity)).toBe(false);
    expect(isNullOrUndefined(42)).toBe(false);
    expect(isNullOrUndefined('')).toBe(false);
    expect(isNullOrUndefined('test')).toBe(false);
    expect(isNullOrUndefined(BigInt(9007199254740991))).toBe(false);
    expect(isNullOrUndefined(new Date())).toBe(false);
    expect(isNullOrUndefined(new Map())).toBe(false);
    expect(isNullOrUndefined(new Set())).toBe(false);
    expect(isNullOrUndefined(new Error())).toBe(false);
    expect(isNullOrUndefined(/test/)).toBe(false);
  });
});
