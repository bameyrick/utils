import { isEmpty } from '../src';

describe('isEmpty', () => {
  it('should return true if value is ""', () => {
    const value = '';

    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is ""', () => {
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
    // tslint:disable-next-line: prefer-const
    let value: string;

    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is undefined', () => {
    const value: undefined = undefined;

    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is null', () => {
    const value: null = null;

    expect(isEmpty(value)).toBe(true);
  });

  it('should return true if value is an empty array', () => {
    // tslint:disable-next-line: no-any
    const value: any[] = [];

    expect(isEmpty(value)).toBe(true);
  });

  it('should return false if value is not an empty array', () => {
    // tslint:disable-next-line: no-any
    const value: any[] = ['a'];

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
    // tslint:disable-next-line: no-any
    const value: any = 1;

    expect(isEmpty(value)).toBe(false);
  });
});
