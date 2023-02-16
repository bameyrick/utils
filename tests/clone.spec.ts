import { clone, isEqual } from '../src';

describe('clone', () => {
  it('should clone a date', () => {
    const value = new Date();

    const cloned = clone(value);

    expect(Object.is(value, cloned)).toBeFalse();
  });

  it('should clone an array', () => {
    const value = ['a', 10, new Date()];

    const cloned = clone(value);

    expect(Object.is(value, cloned)).toBeFalse();
  });

  it('should clone an object', () => {
    const value = {
      a: 'a',
      b: 10,
      c: new Date(),
    };

    const cloned = clone(value);

    expect(Object.is(value, cloned)).toBeFalse();
  });

  it('should deeply clone an array', () => {
    const childArray = ['a', 10, new Date()];
    const childObject = {
      a: 'a',
      b: 10,
      c: new Date(),
    };
    const value = [childArray, childObject, 'a', 10, new Date()];

    const cloned = clone(value);
    const clonedArray = cloned[0];
    const clonedObject = cloned[1];

    expect(Object.is(value, cloned)).toBeFalse();
    expect(Object.is(childArray, clonedArray)).toBeFalse();
    expect(Object.is(childObject, clonedObject)).toBeFalse();
  });

  it('should deeply clone an object', () => {
    const childArray = ['a', 10, new Date()];
    const childObject = {
      a: 'a',
      b: 10,
      c: new Date(),
    };
    const value = {
      childArray,
      childObject,
      a: 'a',
      b: 10,
      c: new Date(),
    };

    const cloned = clone(value);
    const clonedArray = cloned.childArray;
    const clonedObject = cloned.childObject;

    expect(Object.is(value, cloned)).toBeFalse();
    expect(Object.is(childArray, clonedArray)).toBeFalse();
    expect(Object.is(childObject, clonedObject)).toBeFalse();
  });

  it(`should deeply clone a Map`, () => {
    const a = new Map([[1, 2]]);
    const b = clone(a);

    a.set(2, 4);

    expect(isEqual(Array.from(a), Array.from(b))).toBeFalse();
  });

  it(`should deeply clone a Set`, () => {
    const a = new Set([1, 2]);
    const b = clone(a);

    a.add(4);

    expect(isEqual(Array.from(a), Array.from(b))).toBeFalse();
  });

  it(`should return primitives`, () => {
    expect(isEqual(clone(0), 0)).toBeTrue();
  });

  describe(`RegExp`, () => {
    it('should clone a regex with flags', () => {
      expect(clone(/foo/g)).toEqual(/foo/g);
    });

    it('should clone a regex without any flags', () => {
      expect(clone(/foo/)).toEqual(/foo/);
    });

    it('should clone a regex with flags (constructor)', () => {
      expect(clone(new RegExp('foo', 'g'))).toEqual(new RegExp('foo', 'g'));
    });

    it('should clone a regex without any flags (constructor)', () => {
      expect(clone(new RegExp('foo', undefined))).toEqual(new RegExp('foo', undefined));
    });
  });

  it(`Should clone a buffer`, () => {
    const a = Buffer.from('a');
    const b = clone(a);

    a.set([1]);

    expect(a).not.toEqual(b);
  });

  it(`should clone a symbol`, () => {
    const a = Symbol('a');
    const b = clone(a);

    expect(isEqual(a, b)).toBeFalse();
  });

  it(`should clone an Error`, () => {
    const a = new Error('a');
    const b = clone(a);

    expect(a).toEqual(b);
  });

  describe(`Typed Arrays`, () => {
    it(`should clone a Uint8Array`, () => {
      const a = new Uint8Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Uint8ClampedArray`, () => {
      const a = new Uint8ClampedArray([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Uint16Array`, () => {
      const a = new Uint16Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Uint32Array`, () => {
      const a = new Uint32Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Int8Array`, () => {
      const a = new Int8Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Int16Array`, () => {
      const a = new Int16Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Int32Array`, () => {
      const a = new Int32Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Float32Array`, () => {
      const a = new Float32Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a Float64Array`, () => {
      const a = new Float64Array([1, 2, 3]);
      const b = clone(a);

      a.set([4, 5, 6]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a BigInt64Array`, () => {
      const a = new BigInt64Array([1n, 2n, 3n]);
      const b = clone(a);

      a.set([4n, 5n, 6n]);

      expect(a).not.toEqual(b);
    });

    it(`should clone a BigUint64Array`, () => {
      const a = new BigUint64Array([1n, 2n, 3n]);
      const b = clone(a);

      a.set([4n, 5n, 6n]);

      expect(a).not.toEqual(b);
    });
  });
});
