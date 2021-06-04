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

  it('should throw an error if the value passed to it is not a string', () => {
    const value: string[] = [];

    // tslint:disable-next-line: no-any
    expect(() => isEmpty(value as any)).toThrowError();
  });
});
