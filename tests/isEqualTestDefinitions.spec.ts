/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import * as moment from 'moment';
import { IsEqualTestSuite } from './types';

function func1() {}
function func2() {}

class MyMap extends Map {}
class MySet extends Set {}
const emptyObj = {};

function map(obj, Class?: any) {
  const a = new (Class || Map)();

  for (const key in obj) {
    a.set(key, obj[key]);
  }

  return a;
}

function myMap(obj) {
  return map(obj, MyMap);
}

function set(arr, Class?: any) {
  const a = new (Class || Set)();

  for (const value of arr) {
    a.add(value);
  }
  return a;
}

function mySet(arr) {
  return set(arr, MySet);
}

export const isEqualTests: IsEqualTestSuite[] = [
  {
    description: 'single values',
    tests: [
      {
        description: 'null and null',
        a: null,
        b: null,
        expected: true,
      },
      {
        description: 'null and "null"',
        a: null,
        b: 'null',
        expected: false,
      },
      {
        description: 'null and undefined',
        a: null,
        b: undefined,
        expected: false,
      },
      {
        description: 'null and 0',
        a: null,
        b: 0,
        expected: false,
      },
      {
        description: 'NaN and NaN',
        a: NaN,
        b: NaN,
        expected: true,
      },
      {
        description: 'NaN and "NaN"',
        a: NaN,
        b: 'NaN',
        expected: false,
      },
      {
        description: 'NaN and undefined',
        a: NaN,
        b: undefined,
        expected: false,
      },
      {
        description: 'undefined and undefined',
        a: undefined,
        b: undefined,
        expected: true,
      },
      {
        description: 'undefined and "undefined"',
        a: undefined,
        b: 'undefined',
        expected: false,
      },
    ],
  },
  {
    description: 'strings',
    tests: [
      {
        description: 'equal strings',
        a: 'abc',
        b: 'abc',
        expected: true,
      },
      {
        description: 'not equal strings',
        a: 'abc',
        b: 'def',
        expected: false,
      },
      {
        description: 'empty strings',
        a: '',
        b: '',
        expected: true,
      },
      {
        description: 'empty string and null',
        a: '',
        b: null,
        expected: false,
      },
      {
        description: 'empty string and undefined',
        a: '',
        b: undefined,
        expected: false,
      },
    ],
  },
  {
    description: 'numbers',
    tests: [
      {
        description: 'equal numbers',
        a: 123,
        b: 123,
        expected: true,
      },
      {
        description: 'not equal numbers',
        a: 123,
        b: 456,
        expected: false,
      },
      {
        description: 'numbers and strings',
        a: 123,
        b: '123',
        expected: false,
      },
      {
        description: '0 and -0',
        a: 0,
        b: -0,
        expected: true,
      },
    ],
  },
  {
    description: 'booleans',
    tests: [
      {
        description: 'equal booleans (true)',
        a: true,
        b: true,
        expected: true,
      },
      {
        description: 'equal booleans (false)',
        a: false,
        b: false,
        expected: true,
      },
      {
        description: 'not equal booleans',
        a: true,
        b: false,
        expected: false,
      },
      {
        description: 'true and 1',
        a: true,
        b: 1,
        expected: false,
      },
      {
        description: 'false and 0',
        a: false,
        b: 0,
        expected: false,
      },
      {
        description: 'true and "true"',
        a: true,
        b: 'true',
        expected: false,
      },
      {
        description: 'false and "empty string"',
        a: false,
        b: '',
        expected: false,
      },
    ],
  },
  {
    description: 'dates',
    tests: [
      {
        description: 'equal dates',
        a: new Date(2020, 8, 3, 0, 0, 0, 0),
        b: new Date(2020, 8, 3, 0, 0, 0, 0),
        expected: true,
      },
      {
        description: 'not equal dates',
        a: new Date(2020, 8, 3, 0, 0, 0, 0),
        b: new Date(2020, 8, 3, 0, 0, 0, 1),
        expected: false,
      },
      {
        description: 'dates and strings',
        a: new Date(2020, 8, 3, 0, 0, 0, 0),
        b: '2020-09-03T00:00:00.000Z',
        expected: false,
      },
      {
        description: 'dates and numbers',
        a: new Date(2020, 8, 3, 0, 0, 0, 0),
        b: 1599129600000,
        expected: false,
      },
      {
        description: 'dates objects',
        a: new Date(2020, 8, 3, 0, 0, 0, 0),
        b: {},
        expected: false,
      },
    ],
  },
  {
    description: 'functions',
    tests: [
      {
        description: 'equal functions',
        a: func1,
        b: func1,
        expected: true,
      },
      {
        description: 'equal functions created separately',
        a: func1,
        b: func2,
        expected: false,
      },
    ],
  },
  {
    description: 'arrays',
    tests: [
      {
        description: 'equal arrays in same order',
        a: [1, 'a', { key: 'value' }],
        b: [1, 'a', { key: 'value' }],
        expected: true,
      },
      {
        description: 'equal arrays in different order',
        a: [1, 'a', { key: 'value' }],
        b: ['a', { key: 'value' }, 1],
        expected: false,
      },
      {
        description: 'not equal arrays',
        a: [1, 'a', { key: 'value' }],
        b: [2, 'a', { key: 'value' }],
        expected: false,
      },
      {
        description: 'arrays of different lengths',
        a: [1, 'a', { key: 'value' }],
        b: [1, 'a', { key: 'value' }, 2],
        expected: false,
      },
      {
        description: 'differing number arrays',
        a: [1, 2, 3],
        b: [1, 2, 4],
        expected: false,
      },
      {
        description: 'nested arrays',
        a: [1, [2, 3]],
        b: [1, [2, 3]],
        expected: true,
      },
      {
        description: 'not equal nested arrays',
        a: [1, [2, 3]],
        b: [1, [2, 4]],
        expected: false,
      },
      {
        description: 'empty arrays',
        a: [],
        b: [],
        expected: true,
      },
      {
        description: 'empty array and null',
        a: [],
        b: null,
        expected: false,
      },
      {
        description: 'empty array and undefined',
        a: [],
        b: undefined,
        expected: false,
      },
      {
        description: 'pseudo arrays',
        a: { '0': 0, '1': 1, length: 2 },
        b: [0, 1],
        expected: false,
      },
    ],
  },
  {
    description: 'objects',
    tests: [
      {
        description: 'equal objects',
        a: { a: 'yes', b: 0, c: [1, 'b', [3, 4]] },
        b: { a: 'yes', b: 0, c: [1, 'b', [3, 4]] },
        expected: true,
      },
      {
        description: 'equal objects with properties in different order',
        a: { a: 'yes', b: 0, c: [1, 'b', [3, 4]] },
        b: { b: 0, c: [1, 'b', [3, 4]], a: 'yes' },
        expected: true,
      },
      {
        description: 'not equal objects',
        a: { a: 'yes', b: 0, c: [1, 'b', [3, 4]] },
        b: { a: 'yes', b: 0, c: [1, 'b', [3, 5]] },
        expected: false,
      },
      {
        description: 'empty objects',
        a: {},
        b: {},
        expected: true,
      },
      {
        description: 'big object',
        a: {
          prop1: 'value1',
          prop2: 'value2',
          prop3: 'value3',
          prop4: {
            subProp1: 'sub value1',
            subProp2: {
              subSubProp1: 'sub sub value1',
              subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
            },
          },
          prop5: 1000,
          prop6: new Date(2016, 2, 10),
        },
        b: {
          prop1: 'value1',
          prop2: 'value2',
          prop3: 'value3',
          prop4: {
            subProp1: 'sub value1',
            subProp2: {
              subSubProp1: 'sub sub value1',
              subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
            },
          },
          prop5: 1000,
          prop6: new Date(2016, 2, 10),
        },
        expected: true,
      },
      {
        description: 'not equal big objects',
        a: {
          prop1: 'value1',
          prop2: 'value2',
          prop3: 'value3',
          prop4: {
            subProp1: 'sub value1',
            subProp2: {
              subSubProp1: 'sub sub value',
              subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
            },
          },
          prop5: 1000,
          prop6: new Date(2016, 2, 10),
        },
        b: {
          prop5: 1000,
          prop3: 'value3',
          prop1: 'value1',
          prop2: 'value2',
          prop6: new Date('2016/03/10'),
          prop4: {
            subProp2: {
              subSubProp1: 'sub sub value1',
              subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
            },
            subProp1: 'sub value1',
          },
        },
        expected: false,
      },
      {
        description: 'objects with different "toString" functions returning the same values are equal',
        a: {
          toString: () => 'abc',
        },
        b: {
          toString: () => 'abc',
        },
        expected: true,
      },
      {
        description: 'objects with different "toString" functions returning different values are not equal',
        a: {
          toString: () => 'abc',
        },
        b: {
          toString: () => 'def',
        },
        expected: false,
      },
    ],
  },
  {
    description: 'RegExp',
    tests: [
      {
        description: 'equal RegExp',
        a: /abc/,
        b: /abc/,
        expected: true,
      },
      {
        description: 'not equal RegExp',
        a: /abc/,
        b: /abcd/,
        expected: false,
      },
      {
        description: 'equal RegExp with flags',
        a: /abc/gi,
        b: /abc/gi,
        expected: true,
      },
      {
        description: 'not equal RegExp with flags',
        a: /abc/gi,
        b: /abc/g,
        expected: false,
      },
      {
        description: 'RegExp and string',
        a: /abc/,
        b: 'abc',
        expected: false,
      },
      {
        description: 'RegExp and object',
        a: /abc/,
        b: {},
        expected: false,
      },
    ],
  },
  {
    description: 'bigint',
    tests: [
      {
        description: 'equal bigints',
        a: BigInt(1),
        b: BigInt(1),
        expected: true,
      },
      {
        description: 'not equal bigints',
        a: BigInt(1),
        b: BigInt(2),
        expected: false,
      },
    ],
  },

  {
    description: 'Maps',
    tests: [
      {
        description: 'empty maps are equal',
        a: new Map(),
        b: new Map(),
        expected: true,
      },
      {
        description: 'empty maps of different class are not equal',
        a: new Map(),
        b: new MyMap(),
        expected: false,
      },
      {
        description: 'equal maps (same key "order")',
        a: map({ a: 1, b: '2' }),
        b: map({ a: 1, b: '2' }),
        expected: true,
      },
      {
        description: 'not equal maps (same key "order" - instances of different classes)',
        a: map({ a: 1, b: '2' }),
        b: myMap({ a: 1, b: '2' }),
        expected: false,
      },
      {
        description: 'equal maps (different key "order")',
        a: map({ a: 1, b: '2' }),
        b: map({ b: '2', a: 1 }),
        expected: true,
      },
      {
        description: 'equal maps (different key "order" - instances of the same subclass)',
        a: myMap({ a: 1, b: '2' }),
        b: myMap({ b: '2', a: 1 }),
        expected: true,
      },
      {
        description: 'not equal maps (extra key)',
        a: map({ a: 1, b: '2' }),
        b: map({ a: 1, b: '2', c: [] }),
        expected: false,
      },
      {
        description: 'not equal maps (different key value)',
        a: map({ a: 1, b: '2', c: 3 }),
        b: map({ a: 1, b: '2', c: 4 }),
        expected: false,
      },
      {
        description: 'not equal maps (different keys)',
        a: map({ a: 1, b: '2', c: 3 }),
        b: map({ a: 1, b: '2', d: 3 }),
        expected: false,
      },
      {
        description: 'equal maps (same sub-keys)',
        a: map({ a: [map({ b: 'c' })] }),
        b: map({ a: [map({ b: 'c' })] }),
        expected: true,
      },
      {
        description: 'not equal maps (different sub-key value)',
        a: map({ a: [map({ b: 'c' })] }),
        b: map({ a: [map({ b: 'd' })] }),
        expected: false,
      },
      {
        description: 'not equal maps (different sub-key)',
        a: map({ a: [map({ b: 'c' })] }),
        b: map({ a: [map({ c: 'c' })] }),
        expected: false,
      },
      {
        description: 'empty map and empty object are not equal',
        a: {},
        b: new Map(),
        expected: false,
      },
      {
        description: 'map with extra undefined key is not equal #1',
        a: map({}),
        b: map({ foo: undefined }),
        expected: false,
      },
      {
        description: 'map with extra undefined key is not equal #2',
        a: map({ foo: undefined }),
        b: map({}),
        expected: false,
      },
      {
        description: 'maps with extra undefined keys are not equal #3',
        a: map({ foo: undefined }),
        b: map({ bar: undefined }),
        expected: false,
      },
      {
        description: 'null and empty map are not equal',
        a: null,
        b: new Map(),
        expected: false,
      },
      {
        description: 'undefined and empty map are not equal',
        a: undefined,
        b: new Map(),
        expected: false,
      },
      {
        description: 'map and a pseudo map are not equal',
        a: map({}),
        b: {
          constructor: Map,
          size: 0,
          has: () => true,
          get: () => 1,
        },
        expected: false,
      },
    ],
  },
  {
    description: 'Sets',
    tests: [
      {
        description: 'empty sets are equal',
        a: new Set(),
        b: new Set(),
        expected: true,
      },
      {
        description: 'empty sets of different class are not equal',
        a: new Set(),
        b: new MySet(),
        expected: false,
      },
      {
        description: 'equal sets (same value "order")',
        a: set(['a', 'b']),
        b: set(['a', 'b']),
        expected: true,
      },
      {
        description: 'not equal sets (same value "order" - instances of different classes)',
        a: set(['a', 'b']),
        b: mySet(['a', 'b']),
        expected: false,
      },
      {
        description: 'equal sets (different value "order")',
        a: set(['a', 'b']),
        b: set(['b', 'a']),
        expected: true,
      },
      {
        description: 'equal sets (different value "order" - instances of the same subclass)',
        a: mySet(['a', 'b']),
        b: mySet(['b', 'a']),
        expected: true,
      },
      {
        description: 'not equal sets (extra value)',
        a: set(['a', 'b']),
        b: set(['a', 'b', 'c']),
        expected: false,
      },
      {
        description: 'not equal sets (different values)',
        a: set(['a', 'b', 'c']),
        b: set(['a', 'b', 'd']),
        expected: false,
      },
      {
        description: 'not equal sets (different instances of objects)',
        a: set(['a', {}]),
        b: set(['a', {}]),
        expected: false,
      },
      {
        description: 'equal sets (same instances of objects)',
        a: set(['a', emptyObj]),
        b: set(['a', emptyObj]),
        expected: true,
      },
      {
        description: 'empty set and empty object are not equal',
        a: {},
        b: new Set(),
        expected: false,
      },
      {
        description: 'empty set and empty array are not equal',
        a: [],
        b: new Set(),
        expected: false,
      },
      {
        description: 'set with extra undefined value is not equal #1',
        a: set([]),
        b: set([undefined]),
        expected: false,
      },
      {
        description: 'set with extra undefined value is not equal #2',
        a: set([undefined]),
        b: set([]),
        expected: false,
      },
      {
        description: 'set and pseudo set are not equal',
        a: new Set(),
        b: {
          constructor: Set,
          size: 0,
          has: () => true,
        },
        expected: false,
      },
    ],
  },
  {
    description: 'Typed arrays',
    tests: [
      {
        description: 'two empty arrays of the same class are equal',
        a: new Int32Array([]),
        b: new Int32Array([]),
        expected: true,
      },
      {
        description: 'two empty arrays of the different class are not equal',
        a: new Int32Array([]),
        b: new Int16Array([]),
        expected: false,
      },
      {
        description: 'equal arrays',
        a: new Int32Array([1, 2, 3]),
        b: new Int32Array([1, 2, 3]),
        expected: true,
      },
      {
        description: 'equal BigUint64Array arrays',
        a: new BigUint64Array(['1', '2', '3'] as any),
        b: new BigUint64Array(['1', '2', '3'] as any),
        expected: true,
      },
      {
        description: 'not equal BigUint64Array arrays',
        a: new BigUint64Array(['1', '2', '3'] as any),
        b: new BigUint64Array(['1', '2', '4'] as any),
        expected: false,
      },
      {
        description: 'not equal arrays (same items, different class)',
        a: new Int32Array([1, 2, 3]),
        b: new Int16Array([1, 2, 3]),
        expected: false,
      },
      {
        description: 'not equal arrays (different item)',
        a: new Int32Array([1, 2, 3]),
        b: new Int32Array([1, 2, 4]),
        expected: false,
      },
      {
        description: 'not equal arrays (different length)',
        a: new Int32Array([1, 2, 3]),
        b: new Int32Array([1, 2]),
        expected: false,
      },
      {
        description: 'pseudo array and equivalent typed array are not equal',
        a: { '0': 1, '1': 2, length: 2, constructor: Int32Array },
        b: new Int32Array([1, 2]),
        expected: false,
      },
    ],
  },
  {
    description: 'Moment',
    tests: [
      {
        description: 'Moment and any other object are not equal',
        a: moment(),
        b: new Date(),
        expected: false,
      },
      {
        description: 'Two moments with the same value are equal',
        a: moment('2018-01-01'),
        b: moment('2018-01-01'),
        expected: true,
      },
      {
        description: 'Two moments with different values are not equal',
        a: moment('2018-01-01'),
        b: moment('2018-01-02'),
        expected: false,
      },
    ],
  },
];
