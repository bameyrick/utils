import { clone } from '../src';

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
});
