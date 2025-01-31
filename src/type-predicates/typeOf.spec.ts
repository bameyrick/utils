import * as moment from 'moment';
import { typeOf, ValueType } from './typeOf';

describe(`typeOf`, () => {
  it(`undefined`, () => {
    expect(typeOf(undefined)).toBe(ValueType.undefined);
  });

  it(`null`, () => {
    expect(typeOf(null)).toBe(ValueType.null);
  });

  it(`moment`, () => {
    expect(typeOf(moment())).toBe(ValueType.moment);
  });

  describe(`booleans`, () => {
    it(`true`, () => {
      expect(typeOf(true)).toBe(ValueType.boolean);
    });

    it(`false`, () => {
      expect(typeOf(false)).toBe(ValueType.boolean);
    });

    it(`new Boolean(true)`, () => {
      expect(typeOf(new Boolean(true))).toBe(ValueType.boolean);
    });

    it(`new Boolean(false)`, () => {
      expect(typeOf(new Boolean(false))).toBe(ValueType.boolean);
    });
  });

  describe(`numbers`, () => {
    it(`0`, () => {
      expect(typeOf(0)).toBe(ValueType.number);
    });

    it(`1`, () => {
      expect(typeOf(1)).toBe(ValueType.number);
    });

    it(`new Number(0)`, () => {
      expect(typeOf(new Number(0))).toBe(ValueType.number);
    });

    it(`new Number(1)`, () => {
      expect(typeOf(new Number(1))).toBe(ValueType.number);
    });
  });

  describe(`strings`, () => {
    it(`''`, () => {
      expect(typeOf('')).toBe(ValueType.string);
    });

    it(`'a'`, () => {
      expect(typeOf('a')).toBe(ValueType.string);
    });

    it(`new String('')`, () => {
      expect(typeOf(new String(''))).toBe(ValueType.string);
    });

    it(`new String('a')`, () => {
      expect(typeOf(new String('a'))).toBe(ValueType.string);
    });

    it(`template strings`, () => {
      const b = 'b';
      expect(typeOf(`a ${b} c`)).toBe(ValueType.string);
    });
  });

  describe(`objects`, () => {
    it('arguments', () => {
      (function () {
        // eslint-disable-next-line prefer-rest-params
        expect(typeOf(arguments)).toBe(ValueType.arguments);
      })();
    });

    it(`buffers`, () => {
      expect(typeOf(Buffer.from(''))).toBe(ValueType.buffer);
    });

    it(`class`, () => {
      class Test {}
      expect(typeOf(new Test())).toBe(ValueType.object);
    });

    it(`literal`, () => {
      expect(typeOf({})).toBe(ValueType.object);
    });

    it(`created null`, () => {
      expect(typeOf(Object.create(null))).toBe(ValueType.object);
    });

    it(`created object`, () => {
      expect(typeOf(Object.create({}))).toBe(ValueType.object);
    });
  });

  it(`dates`, () => {
    expect(typeOf(new Date())).toBe(ValueType.date);
  });

  describe(`arrays`, () => {
    it(`[]`, () => {
      expect(typeOf([])).toBe(ValueType.array);
    });

    it(`[1]`, () => {
      expect(typeOf([1])).toBe(ValueType.array);
    });

    it(`new Array()`, () => {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      expect(typeOf(new Array())).toBe(ValueType.array);
    });

    it(`new Array(1)`, () => {
      expect(typeOf(new Array(1))).toBe(ValueType.array);
    });
  });

  describe(`RegExp`, () => {
    it(`/a/`, () => {
      expect(typeOf(/a/)).toBe(ValueType.regexp);
    });

    it(`new RegExp('a')`, () => {
      expect(typeOf(new RegExp('a'))).toBe(ValueType.regexp);
    });
  });

  describe(`functions`, () => {
    it(`() => {}`, () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      expect(typeOf(() => {})).toBe(ValueType.function);
    });

    it(`function () {}`, () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      expect(typeOf(function () {})).toBe(ValueType.function);
    });

    it(`function* () {}`, () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      expect(typeOf(function* () {})).toBe(ValueType.generatorfunction);
    });

    it(`new Function()`, () => {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      expect(typeOf(new Function())).toBe(ValueType.function);
    });
  });

  it(`errors`, () => {
    expect(typeOf(new Error())).toBe(ValueType.error);
  });

  describe(`Promises`, () => {
    it(`resolved Promise`, () => {
      expect(typeOf(Promise.resolve())).toBe(ValueType.promise);
    });

    it(`rejected Promise`, () => {
      expect(typeOf(Promise.reject())).toBe(ValueType.promise);
    });
  });

  describe(`generators`, () => {
    it(`generator function`, () => {
      function* generator() {
        yield 1;
      }

      expect(typeOf(generator())).toBe(ValueType.generator);
    });
  });

  describe(`Map`, () => {
    it(`new Map()`, () => {
      expect(typeOf(new Map())).toBe(ValueType.map);
    });

    it(`Map.set`, () => {
      const map = new Map();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.set)).toBe(ValueType.function);
    });

    it(`Map.get`, () => {
      const map = new Map();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.get)).toBe(ValueType.function);
    });

    it(`Map.add`, () => {
      const map = new Map();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((map as any).add)).toBe(ValueType.undefined);
    });
  });

  describe(`WeakMap`, () => {
    it(`new WeakMap()`, () => {
      expect(typeOf(new WeakMap())).toBe(ValueType.weakmap);
    });

    it(`WeakMap.set`, () => {
      const map = new WeakMap();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.set)).toBe(ValueType.function);
    });

    it(`WeakMap.get`, () => {
      const map = new WeakMap();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.get)).toBe(ValueType.function);
    });

    it(`WeakMap.add`, () => {
      const map = new WeakMap();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((map as any).add)).toBe(ValueType.undefined);
    });
  });

  describe(`Set`, () => {
    it(`new Set()`, () => {
      expect(typeOf(new Set())).toBe(ValueType.set);
    });

    it(`Set.set`, () => {
      const set = new Set();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((set as any).set)).toBe(ValueType.undefined);
    });

    it(`Set.get`, () => {
      const set = new Set();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((set as any).get)).toBe(ValueType.undefined);
    });

    it(`Set.add`, () => {
      const set = new Set();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(set.add)).toBe(ValueType.function);
    });
  });

  describe(`WeakSet`, () => {
    it(`new WeakSet()`, () => {
      expect(typeOf(new WeakSet())).toBe(ValueType.weakset);
    });

    it(`WeakSet.weakset`, () => {
      const weakset = new WeakSet();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((weakset as any).set)).toBe(ValueType.undefined);
    });

    it(`WeakSet.get`, () => {
      const weakset = new WeakSet();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((weakset as any).get)).toBe(ValueType.undefined);
    });

    it(`WeakSet.add`, () => {
      const weakset = new WeakSet();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(weakset.add)).toBe(ValueType.function);
    });
  });

  it(`Set Iterator`, () => {
    expect(typeOf(new Set().values())).toBe(ValueType.setiterator);
  });

  it(`Map Iterator`, () => {
    expect(typeOf(new Map().values())).toBe(ValueType.mapiterator);
  });

  it(`Array Iterator`, () => {
    expect(typeOf([].values())).toBe(ValueType.arrayiterator);
  });

  it(`String Iterator`, () => {
    expect(typeOf(''[Symbol.iterator]())).toBe(ValueType.stringiterator);
  });

  describe(`Symbol`, () => {
    it(`Symbol`, () => {
      expect(typeOf(Symbol())).toBe(ValueType.symbol);
    });

    it(`Symbol prototype`, () => {
      expect(typeOf(Symbol.prototype)).toBe(ValueType.symbol);
    });
  });

  describe(`Typed Arrays`, () => {
    it(`Int8Array`, () => {
      expect(typeOf(new Int8Array())).toBe(ValueType.int8array);
    });

    it(`Uint8Array`, () => {
      expect(typeOf(new Uint8Array())).toBe(ValueType.uint8array);
    });

    it(`Uint8ClampedArray`, () => {
      expect(typeOf(new Uint8ClampedArray())).toBe(ValueType.uint8clampedarray);
    });

    it(`Int16Array`, () => {
      expect(typeOf(new Int16Array())).toBe(ValueType.int16array);
    });

    it(`Uint16Array`, () => {
      expect(typeOf(new Uint16Array())).toBe(ValueType.uint16array);
    });

    it(`Int32Array`, () => {
      expect(typeOf(new Int32Array())).toBe(ValueType.int32array);
    });

    it(`Uint32Array`, () => {
      expect(typeOf(new Uint32Array())).toBe(ValueType.uint32array);
    });

    it(`Float32Array`, () => {
      expect(typeOf(new Float32Array())).toBe(ValueType.float32array);
    });

    it(`Float64Array`, () => {
      expect(typeOf(new Float64Array())).toBe(ValueType.float64array);
    });

    it(`BigInt64Array`, () => {
      expect(typeOf(new BigInt64Array())).toBe(ValueType.bigint64array);
    });

    it(`BigUint64Array`, () => {
      expect(typeOf(new BigUint64Array())).toBe(ValueType.biguint64array);
    });
  });
});
