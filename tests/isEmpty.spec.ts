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
});
