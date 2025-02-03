import { isPlainObject } from './isPlainObject';

describe(`isPlainObject`, () => {
  it('should return `true` if the object is created by the `Object` constructor.', () => {
    expect(isPlainObject(Object.create({}))).toBeTrue();
    expect(isPlainObject(Object.create(Object.prototype))).toBeTrue();
    expect(isPlainObject({ foo: 'bar' })).toBeTrue();
    expect(isPlainObject({})).toBeTrue();
    expect(isPlainObject(Object.create(null))).toBeTrue();
  });

  it('should return `false` if the object is not created by the `Object` constructor.', () => {
    function Foo(this: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.abc = {};
    }

    expect(isPlainObject(/foo/)).toBeFalse();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isPlainObject(function () {})).toBeFalse();
    expect(isPlainObject(1)).toBeFalse();
    expect(isPlainObject(['foo', 'bar'])).toBeFalse();
    expect(isPlainObject([])).toBeFalse();
    expect(isPlainObject(new Foo())).toBeFalse();
    expect(isPlainObject(null)).toBeFalse();
  });
});
