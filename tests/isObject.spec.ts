import { isObject } from '../src';

describe('isObject', () => {
  it('should return false if value is null', () => {
    const value = null;

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is undefined', () => {
    const value = undefined;

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is a boolean', () => {
    const value = true;

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is a string', () => {
    const value = 'no';

    expect(isObject(value)).toBe(false);
  });

  it('should return true if value is a object', () => {
    const value = {};

    expect(isObject(value)).toBe(true);
  });

  it('should return false if value is an Array', () => {
    const value = [];

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is a date', () => {
    const value = new Date();

    expect(isObject(value)).toBe(false);
  });

  it('should return true if value is a Map', () => {
    const value = new Map();

    expect(isObject(value)).toBe(true);
  });

  it('should return true if value is a Set', () => {
    const value = new Set();

    expect(isObject(value)).toBe(true);
  });

  it('should return true if value is a WeakMap', () => {
    const value = new WeakMap();

    expect(isObject(value)).toBe(true);
  });

  it('should return true if value is a WeakSet', () => {
    const value = new WeakSet();

    expect(isObject(value)).toBe(true);
  });

  it('should return false if value is a function', () => {
    const value = () => {
      return;
    };

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is a positive number', () => {
    const value = 10;

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is a negative number', () => {
    const value = -10;

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is a decimal', () => {
    const value = 10.2;

    expect(isObject(value)).toBe(false);
  });

  it('should return false if value is a number as a string', () => {
    const value = '10';

    expect(isObject(value)).toBe(false);
  });
});
