import { isPlainObject } from './is-plain-object.js';

describe(`isPlainObject`, () => {
  it('should return `true` for plain objects.', () => {
    expect(isPlainObject(Object.create({}))).toBe(true);
    expect(isPlainObject(Object.create(Object.prototype))).toBe(true);
    expect(isPlainObject({ foo: 'bar' })).toBe(true);
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return `false` for non-plain objects.', () => {
    class Foo {
      public abc = {};
    }

    expect(isPlainObject(/foo/)).toBe(false);

    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject(['foo', 'bar'])).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Foo())).toBe(false);
    expect(isPlainObject(null)).toBe(false);
  });
});
