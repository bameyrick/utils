import { typeOf, ValueType } from './typeOf';

describe(`typeOf`, () => {
  it(`undefined`, () => {
    expect(typeOf(undefined)).toBe(ValueType.Undefined);
  });

  it(`null`, () => {
    expect(typeOf(null)).toBe(ValueType.Null);
  });

  describe(`booleans`, () => {
    it(`true`, () => {
      expect(typeOf(true)).toBe(ValueType.Boolean);
    });

    it(`false`, () => {
      expect(typeOf(false)).toBe(ValueType.Boolean);
    });

    it(`new Boolean(true)`, () => {
      expect(typeOf(new Boolean(true))).toBe(ValueType.Boolean);
    });

    it(`new Boolean(false)`, () => {
      expect(typeOf(new Boolean(false))).toBe(ValueType.Boolean);
    });
  });

  describe(`numbers`, () => {
    it(`0`, () => {
      expect(typeOf(0)).toBe(ValueType.Number);
    });

    it(`1`, () => {
      expect(typeOf(1)).toBe(ValueType.Number);
    });

    it(`new Number(0)`, () => {
      expect(typeOf(new Number(0))).toBe(ValueType.Number);
    });

    it(`new Number(1)`, () => {
      expect(typeOf(new Number(1))).toBe(ValueType.Number);
    });
  });

  describe(`strings`, () => {
    it(`''`, () => {
      expect(typeOf('')).toBe(ValueType.String);
    });

    it(`'a'`, () => {
      expect(typeOf('a')).toBe(ValueType.String);
    });

    it(`new String('')`, () => {
      expect(typeOf(new String(''))).toBe(ValueType.String);
    });

    it(`new String('a')`, () => {
      expect(typeOf(new String('a'))).toBe(ValueType.String);
    });

    it(`template strings`, () => {
      const b = 'b';
      expect(typeOf(`a ${b} c`)).toBe(ValueType.String);
    });
  });

  describe(`objects`, () => {
    it('arguments', () => {
      (function () {
        // eslint-disable-next-line prefer-rest-params
        expect(typeOf(arguments)).toBe(ValueType.Arguments);
      })();
    });

    it(`buffers`, () => {
      expect(typeOf(Buffer.from(''))).toBe(ValueType.Buffer);
    });

    it(`class`, () => {
      class Test {}
      expect(typeOf(new Test())).toBe(ValueType.Object);
    });

    it(`literal`, () => {
      expect(typeOf({})).toBe(ValueType.Object);
    });

    it(`created null`, () => {
      expect(typeOf(Object.create(null))).toBe(ValueType.Object);
    });

    it(`created object`, () => {
      expect(typeOf(Object.create({}))).toBe(ValueType.Object);
    });
  });

  it(`dates`, () => {
    expect(typeOf(new Date())).toBe(ValueType.Date);
  });

  describe(`arrays`, () => {
    it(`[]`, () => {
      expect(typeOf([])).toBe(ValueType.Array);
    });

    it(`[1]`, () => {
      expect(typeOf([1])).toBe(ValueType.Array);
    });

    it(`new Array()`, () => {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      expect(typeOf(new Array())).toBe(ValueType.Array);
    });

    it(`new Array(1)`, () => {
      expect(typeOf(new Array(1))).toBe(ValueType.Array);
    });
  });

  describe(`RegExp`, () => {
    it(`/a/`, () => {
      expect(typeOf(/a/)).toBe(ValueType.RegExp);
    });

    it(`new RegExp('a')`, () => {
      expect(typeOf(new RegExp('a'))).toBe(ValueType.RegExp);
    });
  });

  describe(`functions`, () => {
    it(`() => {}`, () => {
      expect(typeOf(() => {})).toBe(ValueType.Function);
    });

    it(`function () {}`, () => {
      expect(typeOf(function () {})).toBe(ValueType.Function);
    });

    it(`function* () {}`, () => {
      expect(typeOf(function* () {})).toBe(ValueType.GeneratorFunction);
    });

    it(`new Function()`, () => {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      expect(typeOf(new Function())).toBe(ValueType.Function);
    });
  });

  it(`errors`, () => {
    expect(typeOf(new Error())).toBe(ValueType.Error);
  });

  describe(`Promises`, () => {
    it(`resolved Promise`, () => {
      expect(typeOf(Promise.resolve())).toBe(ValueType.Promise);
    });

    it(`rejected Promise`, () => {
      expect(typeOf(Promise.reject(new Error()).catch(() => {}))).toBe(ValueType.Promise);
    });
  });

  describe(`generators`, () => {
    it(`generator function`, () => {
      function* generator() {
        yield 1;
      }

      expect(typeOf(generator())).toBe(ValueType.Generator);
    });
  });

  describe(`Map`, () => {
    it(`new Map()`, () => {
      expect(typeOf(new Map())).toBe(ValueType.Map);
    });

    it(`Map.set`, () => {
      const map = new Map();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.set)).toBe(ValueType.Function);
    });

    it(`Map.get`, () => {
      const map = new Map();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.get)).toBe(ValueType.Function);
    });

    it(`Map.add`, () => {
      const map = new Map();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((map as any).add)).toBe(ValueType.Undefined);
    });
  });

  describe(`WeakMap`, () => {
    it(`new WeakMap()`, () => {
      expect(typeOf(new WeakMap())).toBe(ValueType.WeakMap);
    });

    it(`WeakMap.set`, () => {
      const map = new WeakMap();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.set)).toBe(ValueType.Function);
    });

    it(`WeakMap.get`, () => {
      const map = new WeakMap();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(map.get)).toBe(ValueType.Function);
    });

    it(`WeakMap.add`, () => {
      const map = new WeakMap();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((map as any).add)).toBe(ValueType.Undefined);
    });
  });

  describe(`Set`, () => {
    it(`new Set()`, () => {
      expect(typeOf(new Set())).toBe(ValueType.Set);
    });

    it(`Set.set`, () => {
      const set = new Set();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((set as any).set)).toBe(ValueType.Undefined);
    });

    it(`Set.get`, () => {
      const set = new Set();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((set as any).get)).toBe(ValueType.Undefined);
    });

    it(`Set.add`, () => {
      const set = new Set();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(set.add)).toBe(ValueType.Function);
    });
  });

  describe(`WeakSet`, () => {
    it(`new WeakSet()`, () => {
      expect(typeOf(new WeakSet())).toBe(ValueType.WeakSet);
    });

    it(`WeakSet.weakset`, () => {
      const weakset = new WeakSet();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((weakset as any).set)).toBe(ValueType.Undefined);
    });

    it(`WeakSet.get`, () => {
      const weakset = new WeakSet();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(typeOf((weakset as any).get)).toBe(ValueType.Undefined);
    });

    it(`WeakSet.add`, () => {
      const weakset = new WeakSet();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(typeOf(weakset.add)).toBe(ValueType.Function);
    });
  });

  it(`Set Iterator`, () => {
    expect(typeOf(new Set().values())).toBe(ValueType.SetIterator);
  });

  it(`Map Iterator`, () => {
    expect(typeOf(new Map().values())).toBe(ValueType.MapIterator);
  });

  it(`Array Iterator`, () => {
    expect(typeOf([].values())).toBe(ValueType.ArrayIterator);
  });

  it(`String Iterator`, () => {
    expect(typeOf(''[Symbol.iterator]())).toBe(ValueType.StringIterator);
  });

  describe(`Symbol`, () => {
    it(`Symbol`, () => {
      expect(typeOf(Symbol())).toBe(ValueType.Symbol);
    });

    it(`Symbol prototype`, () => {
      expect(typeOf(Symbol.prototype)).toBe(ValueType.Symbol);
    });
  });

  describe(`Typed Arrays`, () => {
    it(`Int8Array`, () => {
      expect(typeOf(new Int8Array())).toBe(ValueType.Int8Array);
    });

    it(`Uint8Array`, () => {
      expect(typeOf(new Uint8Array())).toBe(ValueType.Uint8Array);
    });

    it(`Uint8ClampedArray`, () => {
      expect(typeOf(new Uint8ClampedArray())).toBe(ValueType.Uint8ClampedArray);
    });

    it(`Int16Array`, () => {
      expect(typeOf(new Int16Array())).toBe(ValueType.Int16Array);
    });

    it(`Uint16Array`, () => {
      expect(typeOf(new Uint16Array())).toBe(ValueType.Uint16Array);
    });

    it(`Int32Array`, () => {
      expect(typeOf(new Int32Array())).toBe(ValueType.Int32Array);
    });

    it(`Uint32Array`, () => {
      expect(typeOf(new Uint32Array())).toBe(ValueType.Uint32Array);
    });

    it(`Float32Array`, () => {
      expect(typeOf(new Float32Array())).toBe(ValueType.Float32Array);
    });

    it(`Float64Array`, () => {
      expect(typeOf(new Float64Array())).toBe(ValueType.Float64Array);
    });

    it(`BigInt64Array`, () => {
      expect(typeOf(new BigInt64Array())).toBe(ValueType.BigInt64Array);
    });

    it(`BigUint64Array`, () => {
      expect(typeOf(new BigUint64Array())).toBe(ValueType.BigUint64Array);
    });
  });
});
