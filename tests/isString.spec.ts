import { isString } from '../src';

describe('isString', () => {
  it('should return false if value is null', () => {
    const value = null;

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is undefined', () => {
    const value = undefined;

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a boolean', () => {
    const value = true;

    expect(isString(value)).toBe(false);
  });

  it('should return true if value is a string', () => {
    const value = 'no';

    expect(isString(value)).toBe(true);
  });

  it('should return false if value is a object', () => {
    const value = {};

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is an Array', () => {
    const value = new Array();

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a date', () => {
    const value = new Date();

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a Map', () => {
    const value = new Map();

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a Set', () => {
    const value = new Set();

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a WeakMap', () => {
    const value = new WeakMap();

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a WeakSet', () => {
    const value = new WeakSet();

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a function', () => {
    const value = () => {
      return;
    };

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a positive number', () => {
    const value = 10;

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a negative number', () => {
    const value = -10;

    expect(isString(value)).toBe(false);
  });

  it('should return false if value is a decimal', () => {
    const value = 10.2;

    expect(isString(value)).toBe(false);
  });

  it('should return true if value is a number as a string', () => {
    const value = '10';

    expect(isString(value)).toBe(true);
  });
});
