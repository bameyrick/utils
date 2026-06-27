import { isMergeableObject } from './is-mergeable-object.js';

describe('isMergeableObject', () => {
  it('should return true for plain objects', () => {
    expect(isMergeableObject({})).toBe(true);
    expect(isMergeableObject({ a: 1 })).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isMergeableObject([])).toBe(false);
    expect(isMergeableObject([1, 2, 3])).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isMergeableObject(null)).toBe(false);
    expect(isMergeableObject(undefined)).toBe(false);
  });

  it('should return false for special objects like RegExp, Date, and ArrayBuffer views', () => {
    expect(isMergeableObject(/test/)).toBe(false);
    expect(isMergeableObject(new Date())).toBe(false);
    expect(isMergeableObject(new ArrayBuffer(8))).toBe(false);
    expect(isMergeableObject(new Uint8Array())).toBe(false);
    expect(isMergeableObject(Buffer.from(''))).toBe(false);
  });

  it('should return false for non-object types', () => {
    expect(isMergeableObject(42)).toBe(false);
    expect(isMergeableObject('test')).toBe(false);
    expect(isMergeableObject(true)).toBe(false);
    expect(isMergeableObject(false)).toBe(false);
    expect(isMergeableObject(Symbol('test'))).toBe(false);
  });
});
