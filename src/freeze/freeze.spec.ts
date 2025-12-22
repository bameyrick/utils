/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { freeze } from './freeze';

describe('freeze', () => {
  it('should deeply freeze an object', () => {
    const childArray = ['a', 10, new Date()];
    const childObject = {
      a: 'a',
      b: 10,
      c: new Date(),
    };
    const value = {
      childArray,
      childObject,
    };
    const frozenValue = freeze(value);

    expect(Object.isFrozen(frozenValue)).toBe(true);
    expect(Object.isFrozen(frozenValue.childArray)).toBe(true);
    expect(Object.isFrozen(frozenValue.childObject)).toBe(true);
  });

  it('should deeply freeze symbol-keyed properties', () => {
    const sym = Symbol('child');
    const value: any = {
      [sym]: { a: { b: 1 } },
    };

    const frozenValue = freeze(value) as any;

    expect(Object.isFrozen(frozenValue)).toBe(true);
    expect(Object.isFrozen(frozenValue[sym])).toBe(true);
    expect(Object.isFrozen(frozenValue[sym].a)).toBe(true);
  });

  it('should handle circular references', () => {
    const value: any = { a: 1 };
    value.self = value;

    const frozenValue = freeze(value) as any;

    expect(Object.isFrozen(frozenValue)).toBe(true);
    expect(frozenValue.self).toBe(frozenValue);
  });

  it('should deeply freeze an array', () => {
    const childArray = ['a', 10, new Date()];
    const childObject = {
      a: 'a',
      b: 10,
      c: new Date(),
    };
    const value = [childArray, childObject];
    const frozenValue = freeze(value);

    expect(Object.isFrozen(frozenValue)).toBe(true);
    expect(Object.isFrozen(frozenValue[0])).toBe(true);
    expect(Object.isFrozen(frozenValue[1])).toBe(true);
  });

  it('should deeply freeze a map', () => {
    const keyObject = { a: 'a' };
    const valueObject = { b: 'b' };
    const value = new Map<any, any>([
      ['key1', 'value1'],
      [keyObject, valueObject],
    ]);
    const frozenValue = freeze(value);

    expect(() => (frozenValue as any).set('x', 'y')).toThrow();
    expect(() => (frozenValue as any).delete('key1')).toThrow();
    expect(() => (frozenValue as any).clear()).toThrow();

    frozenValue.forEach((v, k) => {
      expect(Object.isFrozen(k)).toBe(true);
      expect(Object.isFrozen(v)).toBe(true);
    });
  });

  it('should prevent mutation of map values like Date', () => {
    const value = new Map<any, any>([['d', new Date(0)]]);
    const frozenValue = freeze(value) as any;
    const date = frozenValue.get('d');

    expect(() => date.setTime(123)).toThrow();
  });

  it('should deeply freeze a set', () => {
    const valueObject1 = { a: 'a' };
    const valueObject2 = { b: 'b' };
    const value = new Set<any>(['value1', valueObject1, valueObject2]);
    const frozenValue = freeze(value);

    expect(() => (frozenValue as any).add('x')).toThrow();
    expect(() => (frozenValue as any).delete('value1')).toThrow();
    expect(() => (frozenValue as any).clear()).toThrow();

    frozenValue.forEach(v => {
      expect(Object.isFrozen(v)).toBe(true);
    });
  });

  it('should prevent mutation of Date', () => {
    const value = new Date(0);
    const frozenValue = freeze(value) as any;

    expect(() => frozenValue.setTime(123)).toThrow();
  });

  it('should prevent mutation of typed arrays', () => {
    const value = new Uint8Array([1, 2, 3]);
    const frozenValue = freeze(value) as any;

    expect(frozenValue[0]).toBe(1);
    expect(() => {
      frozenValue[0] = 9;
    }).toThrow();
    expect(() => frozenValue.set([4], 0)).toThrow();
    expect(() => frozenValue.fill(0)).toThrow();
  });
});
