import { isNumber } from './isNumber';

describe('isNumber', () => {
  it('should return false if value is null', () => {
    const value = null;

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is undefined', () => {
    const value = undefined;

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a boolean', () => {
    const value = true;

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a string', () => {
    const value = 'no';

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a object', () => {
    const value = {};

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is an Array', () => {
    const value = [];

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a date', () => {
    const value = new Date();

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a Map', () => {
    const value = new Map();

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a Set', () => {
    const value = new Set();

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a WeakMap', () => {
    const value = new WeakMap();

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a WeakSet', () => {
    const value = new WeakSet();

    expect(isNumber(value)).toBe(false);
  });

  it('should return false if value is a function', () => {
    const value = () => {
      return;
    };

    expect(isNumber(value)).toBe(false);
  });

  it('should return true if value is a positive number', () => {
    const value = 10;

    expect(isNumber(value)).toBe(true);
  });

  it('should return true if value is a negative number', () => {
    const value = -10;

    expect(isNumber(value)).toBe(true);
  });

  it('should return true if value is a decimal', () => {
    const value = 10.2;

    expect(isNumber(value)).toBe(true);
  });

  it('should return false if value is a number as a string', () => {
    const value = '10';

    expect(isNumber(value)).toBe(false);
  });
});
