import { isNaNStrict } from '../src';

describe(`isNanStrict`, () => {
  it(`should return true if value is NaN`, () => {
    const value = NaN;

    expect(isNaNStrict(value)).toBeTrue();
  });

  it('should return false if value is null', () => {
    const value = null;

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is undefined', () => {
    const value = undefined;

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a boolean', () => {
    const value = true;

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a string', () => {
    const value = 'no';

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a object', () => {
    const value = {};

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is an Array', () => {
    const value = [];

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a date', () => {
    const value = new Date();

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a Map', () => {
    const value = new Map();

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a Set', () => {
    const value = new Set();

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a WeakMap', () => {
    const value = new WeakMap();

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a WeakSet', () => {
    const value = new WeakSet();

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a function', () => {
    const value = () => {
      return;
    };

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a positive number', () => {
    const value = 10;

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a negative number', () => {
    const value = -10;

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a decimal', () => {
    const value = 10.2;

    expect(isNaNStrict(value)).toBe(false);
  });

  it('should return false if value is a NaN as a string', () => {
    const value = 'NaN';

    expect(isNaNStrict(value)).toBe(false);
  });
});
