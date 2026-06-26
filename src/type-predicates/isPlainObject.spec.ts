import { isPlainObject } from './isPlainObject';

describe(`isPlainObject`, () => {
  it('should return `true` if the object is created by the `Object` constructor.', () => {
    expect(isPlainObject(Object.create({}))).toBe(true);
    expect(isPlainObject(Object.create(Object.prototype))).toBe(true);
    expect(isPlainObject({ foo: 'bar' })).toBe(true);
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return `false` if the object is not created by the `Object` constructor.', () => {
    function Foo(this: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.abc = {};
    }

    expect(isPlainObject(/foo/)).toBe(false);

    expect(isPlainObject(function () {})).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject(['foo', 'bar'])).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Foo())).toBe(false);
    expect(isPlainObject(null)).toBe(false);
  });
});
