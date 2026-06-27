interface MergeTest {
  description: string;
  source: object | any[];
  target: object | any[];
  expected?: object | any[];
  notEqual?: {
    keyA: string;
    keyB: string;
  };
}

const monday = new Date('2016-09-27T01:08:12.761Z');
const tuesday = new Date('2016-09-28T01:18:12.761Z');

export const mergeTests: MergeTest[] = [
  {
    description: `should add keys in target that do not exist in source`,
    target: {
      a: 1,
    },
    source: {
      b: 2,
    },
    expected: {
      a: 1,
      b: 2,
    },
  },
  {
    description: `should merge existing simple keys in target with source`,
    source: { key1: 'changed', key2: 'value2' },
    target: { key1: 'value1', key3: 'value3' },
    expected: {
      key1: 'changed',
      key2: 'value2',
      key3: 'value3',
    },
  },
  {
    description: `should merge nested objects into target`,
    source: {
      key1: {
        subkey1: 'changed',
        subkey3: 'added',
      },
    },
    target: {
      key1: {
        subkey1: 'value1',
        subkey2: 'value2',
      },
    },
    expected: {
      key1: {
        subkey1: 'changed',
        subkey2: 'value2',
        subkey3: 'added',
      },
    },
  },
  {
    description: `should replace simple key with nested object in target`,
    source: {
      key1: {
        subkey1: 'subvalue1',
        subkey2: 'subvalue2',
      },
    },
    target: {
      key1: 'value1',
      key2: 'value2',
    },
    expected: {
      key1: {
        subkey1: 'subvalue1',
        subkey2: 'subvalue2',
      },
      key2: 'value2',
    },
  },
  {
    description: `should add nested object in target`,
    source: {
      b: {
        c: {},
      },
    },
    target: {
      a: {},
    },
    expected: {
      a: {},
      b: {
        c: {},
      },
    },
  },
  {
    description: `should clone source and target`,
    source: {
      b: {
        c: 'foo',
      },
    },
    target: {
      a: {
        d: 'bar',
      },
    },
    expected: {
      a: {
        d: 'bar',
      },
      b: {
        c: 'foo',
      },
    },
    notEqual: {
      keyA: 'a',
      keyB: 'b',
    },
  },
  {
    description: `should clone source and target`,
    source: {
      b: {
        c: 'foo',
      },
    },
    target: {
      a: {
        d: 'bar',
      },
    },
    notEqual: {
      keyA: 'a',
      keyB: 'b',
    },
  },
  {
    description: `should replace object with simple key in target`,
    source: { key1: 'value1' },
    target: {
      key1: {
        subkey1: 'subvalue1',
        subkey2: 'subvalue2',
      },
      key2: 'value2',
    },
    expected: { key1: 'value1', key2: 'value2' },
  },
  {
    description: `should replace objects with arrays`,
    target: { key1: { subkey: 'one' } },
    source: { key1: ['subkey'] },
    expected: { key1: ['subkey'] },
  },
  {
    description: `should replace arrays with objects`,
    target: { key1: ['subkey'] },
    source: { key1: { subkey: 'one' } },
    expected: { key1: { subkey: 'one' } },
  },
  {
    description: `should replace dates with arrays`,
    target: { key1: new Date() },
    source: { key1: ['subkey'] },
    expected: { key1: ['subkey'] },
  },
  {
    description: `should replace null with arrays`,
    target: {
      key1: null,
    },
    source: {
      key1: ['subkey'],
    },
    expected: {
      key1: ['subkey'],
    },
  },
  {
    description: `should work on simple array`,
    source: ['one', 'three'],
    target: ['one', 'two'],
    expected: ['one', 'two', 'one', 'three'],
  },
  {
    description: `should work on another simple array`,
    target: ['a1', 'a2', 'c1', 'f1', 'p1'],
    source: ['t1', 's1', 'c2', 'r1', 'p2', 'p3'],
    expected: ['a1', 'a2', 'c1', 'f1', 'p1', 't1', 's1', 'c2', 'r1', 'p2', 'p3'],
  },
  {
    description: `should work on array properties`,
    source: {
      key1: ['one', 'three'],
      key2: ['four'],
    },
    target: {
      key1: ['one', 'two'],
    },
    expected: {
      key1: ['one', 'two', 'one', 'three'],
      key2: ['four'],
    },
  },
  {
    description: `should work on array of objects`,
    source: [{ key1: ['one', 'three'], key2: ['one'] }, { key3: ['five'] }],
    target: [{ key1: ['one', 'two'] }, { key3: ['four'] }],
    expected: [{ key1: ['one', 'two'] }, { key3: ['four'] }, { key1: ['one', 'three'], key2: ['one'] }, { key3: ['five'] }],
  },
  {
    description: `should treat regular expressions like primitive values`,
    target: { key1: /abc/ },
    source: { key1: /efg/ },
    expected: { key1: /efg/ },
  },
  {
    description: `should treat dates like primitives`,
    target: {
      key: monday,
    },
    source: {
      key: tuesday,
    },
    expected: {
      key: tuesday,
    },
  },
  {
    description: `should treat functions like primitives`,
    target: [],
    source: [null],
    expected: [null],
  },
];
