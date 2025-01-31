import { difference } from './difference';

describe('difference', () => {
  it('Should return an empty array if the provided array has no values', () => {
    expect(difference([], [3, 2])).toEqual([]);
  });

  it('Should return an empty array if the provided values has no values', () => {
    expect(difference([2, 1], [])).toEqual([]);
  });

  it('Should find the difference between two number arrays', () => {
    expect(difference([2, 1], [3, 2])).toEqual([1]);
  });

  it('Should find the difference between two string arrays', () => {
    expect(difference(['apple', 'banana', 'peach'], ['orange', 'apple'])).toEqual(['banana', 'peach']);
  });
});
