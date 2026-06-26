import { sortBy } from './sort-by.js';

interface Person {
  name: string;
  age: number;
  score: string;
  address: { city: string };
}

const people: Person[] = [
  { name: 'Charlie', age: 30, score: '85', address: { city: 'York' } },
  { name: 'alice', age: 25, score: '100', address: { city: 'Bath' } },
  { name: 'Bob', age: 25, score: '72', address: { city: 'Ely' } },
];

describe('sortBy', () => {
  describe('single string property', () => {
    it('sorts by a string property ascending using locale order', () => {
      const result = [...people].sort(sortBy<Person>('name'));
      expect(result.map(p => p.name)).toEqual(['alice', 'Bob', 'Charlie']);
    });

    it('sorts by a numeric property ascending', () => {
      const result = [...people].sort(sortBy<Person>('age'));
      expect(result.map(p => p.age)).toEqual([25, 25, 30]);
    });

    it('sorts by a string property descending when prefixed with -', () => {
      const result = [...people].sort(sortBy<Person>('-age'));
      expect(result.map(p => p.age)).toEqual([30, 25, 25]);
    });
  });

  describe('case-insensitive sorting (^ suffix)', () => {
    it('sorts case-insensitively when property ends with ^', () => {
      const result = [...people].sort(sortBy<Person>('name^'));
      expect(result.map(p => p.name)).toEqual(['alice', 'Bob', 'Charlie']);
    });

    it('sorts case-insensitively descending when prefixed with - and suffixed with ^', () => {
      const result = [...people].sort(sortBy<Person>('-name^'));
      expect(result.map(p => p.name)).toEqual(['Charlie', 'Bob', 'alice']);
    });
  });

  describe('multiple properties (tie-breaking)', () => {
    it('breaks ties using the second property', () => {
      const result = [...people].sort(sortBy<Person>('age', 'name^'));
      expect(result.map(p => p.name)).toEqual(['alice', 'Bob', 'Charlie']);
    });

    it('breaks ties descending on the second property', () => {
      const result = [...people].sort(sortBy<Person>('age', '-name^'));
      expect(result.map(p => p.name)).toEqual(['Bob', 'alice', 'Charlie']);
    });
  });

  describe('numeric strings', () => {
    it('sorts numeric strings as numbers rather than lexicographically', () => {
      const result = [...people].sort(sortBy<Person>('score'));
      expect(result.map(p => p.score)).toEqual(['72', '85', '100']);
    });
  });

  describe('nested (dotted) paths', () => {
    it('sorts by a nested property', () => {
      const result = [...people].sort(sortBy<Person>('address.city'));
      expect(result.map(p => p.address.city)).toEqual(['Bath', 'Ely', 'York']);
    });
  });

  describe('no properties (sort primitives directly)', () => {
    it('sorts an array of strings case-insensitively', () => {
      const words = ['Banana', 'apple', 'Cherry'];
      expect([...words].sort(sortBy())).toEqual(['apple', 'Banana', 'Cherry']);
    });

    it('sorts an array of numbers', () => {
      const nums = [3, 1, 2];
      expect([...nums].sort(sortBy())).toEqual([1, 2, 3]);
    });
  });

  describe('mapping function', () => {
    it('applies a custom mapping function during comparison', () => {
      const mapper = (_key: string, value: unknown): unknown => {
        if (typeof value === 'string') {
          return value.length;
        }

        return value;
      };

      const result = [...people].sort(sortBy<Person>('name', mapper));
      expect(result.map(p => p.name)).toEqual(['Bob', 'alice', 'Charlie']);
    });
  });

  describe('null / undefined values', () => {
    it('treats missing nested values as empty strings (sorted first)', () => {
      const sparse = [
        { name: 'Z', address: { city: 'York' } },
        { name: 'A', address: null as unknown as { city: string } },
      ];
      const result = [...sparse].sort(sortBy<(typeof sparse)[0]>('address.city'));
      expect(result.map(p => p.name)).toEqual(['A', 'Z']);
    });
  });
});
