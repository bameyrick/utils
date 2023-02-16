import { isBuffer } from '../src/isBuffer';

describe(`isBuffer`, () => {
  it(`should return true if value is a Buffer`, () => {
    const value = Buffer.from('');

    expect(isBuffer(value)).toBe(true);
  });

  it(`should return false if value is not a Buffer`, () => {
    const value = Buffer;

    expect(isBuffer(value)).toBe(false);
  });
});
