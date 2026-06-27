import { isEmpty } from './is-empty.js';

describe('isEmpty', () => {
  it('should return true if value is ""', () => {
    const value = '';

    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is whitespace-only', () => {
    const value = '   ';

    expect(isEmpty(value)).toBe(true);
  });

  it('should return false if value is a non empty string', () => {
    const value = 'yes';

    expect(isEmpty(value)).toBe(false);
  });

  it('should return true if value is undefined', () => {
    const value = undefined;

    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is not provided', () => {
    // eslint-disable-next-line no-unassigned-vars
    let value: string;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is null', () => {
    const value = null;

    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is an empty array', () => {
    const value: unknown[] = [];

    expect(isEmpty(value)).toBe(true);
  });

  it('should return false if value is not an empty array', () => {
    const value: unknown[] = ['a'];

    expect(isEmpty(value)).toBe(false);
  });

  it('should return true if value is an empty object', () => {
    const value: object = {};

    expect(isEmpty(value)).toBe(true);
  });

  it('should return false if value is not an empty object', () => {
    const value: object = { a: 'a' };

    expect(isEmpty(value)).toBe(false);
  });

  it('should return false if value is a number', () => {
    const value = 1;

    expect(isEmpty(value)).toBe(false);
  });

  it('should return true if value is an empty set', () => {
    const value = new Set<unknown>();

    expect(isEmpty(value)).toBe(true);
  });

  it('should return false if value is not an empty set', () => {
    const value = new Set<unknown>(['a']);

    expect(isEmpty(value)).toBe(false);
  });

  it('should return true if value is an empty map', () => {
    const value = new Map<unknown, unknown>();

    expect(isEmpty(value)).toBe(true);
  });

  it('should return false if value is not an empty map', () => {
    const value = new Map<unknown, unknown>([['a', 'a']]);

    expect(isEmpty(value)).toBe(false);
  });
});
