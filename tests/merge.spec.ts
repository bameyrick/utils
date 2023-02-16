import { merge } from '../src/merge';
import { mergeTests } from './mergeTestDefinitions.spec';

describe(`merge`, () => {
  for (const { description, target, source, expected, notEqual } of mergeTests) {
    it(description, () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const merged = merge(target as any, source as any) as object;

      if (expected) {
        expect(merged).toEqual(expected);
      }

      if (notEqual) {
        expect(merged[notEqual.keyA]).not.toBe(target[notEqual.keyA]);
        expect(merged[notEqual.keyB]).not.toBe(source[notEqual.keyB]);
      }
    });
  }

  it(`should clone arrays element if it is object`, () => {
    const a = { key: 'yup' };
    const target = [];
    const source = [a];

    const output = merge(target, source);

    expect(output[0]).not.toBe(a);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect((output[0] as any).key).toEqual('yup');
  });

  it('should clone an array property when there is no target array', () => {
    const someObject = {};
    const target = {};
    const source = { ary: [someObject] };
    const output = merge(target, source);

    expect(output).toEqual({ ary: [{}] });
    expect(output.ary[0]).not.toBe(someObject);
  });

  it('should overwrite values when property is initialised but undefined', () => {
    const target1 = { value: [] };
    const target2 = { value: null };
    const target3 = { value: 2 };

    const src = { value: undefined };

    function hasUndefinedProperty(o: { value: unknown }) {
      expect(typeof o.value).toEqual('undefined');
    }

    hasUndefinedProperty(merge(target1, src));
    hasUndefinedProperty(merge(target2, src));
    hasUndefinedProperty(merge(target3, src));
  });

  it('dates should copy correctly in an array', () => {
    const monday = new Date('2016-09-27T01:08:12.761Z');
    const tuesday = new Date('2016-09-28T01:18:12.761Z');

    const target = [monday, 'dude'];
    const source = [tuesday, 'lol'];

    const expected = [monday, 'dude', tuesday, 'lol'];
    const actual = merge(target, source);

    expect(actual).toEqual(expected);
  });

  it('should handle custom merge functions', () => {
    const target = {
      letters: ['a', 'b'],
      people: {
        first: 'Alex',
        second: 'Bert',
      },
    };

    const source = {
      letters: ['c'],
      people: {
        first: 'Smith',
        second: 'Bertson',
        third: 'Car',
      },
    };

    const mergePeople = (target: object, source: object) => {
      const keys = new Set(Object.keys(target).concat(Object.keys(source)));
      const destination = {};
      keys.forEach(key => {
        if (key in target && key in source) {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          destination[key] = `${target[key]}-${source[key]}`;
        } else if (key in target) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          destination[key] = target[key];
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          destination[key] = source[key];
        }
      });
      return destination;
    };

    const options = {
      customMerge: key => {
        if (key === 'people') {
          return mergePeople;
        }

        return merge;
      },
    };

    const expected = {
      letters: ['a', 'b', 'c'],
      people: {
        first: 'Alex-Smith',
        second: 'Bert-Bertson',
        third: 'Car',
      },
    };

    const actual = merge(target, source, options);
    expect(actual).toEqual(expected);
  });

  it('should handle custom merge functions', () => {
    const target = {
      letters: ['a', 'b'],
      people: {
        first: 'Alex',
        second: 'Bert',
      },
    };

    const source = {
      letters: ['c'],
      people: {
        first: 'Smith',
        second: 'Bertson',
        third: 'Car',
      },
    };

    const mergeLetters = () => {
      return 'merged letters';
    };

    const options = {
      customMerge: key => {
        if (key === 'letters') {
          return mergeLetters;
        }
      },
    };

    const expected = {
      letters: 'merged letters',
      people: {
        first: 'Smith',
        second: 'Bertson',
        third: 'Car',
      },
    };

    const actual = merge(target, source, options);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    expect(actual).toEqual(expected as any);
  });

  it('should merge correctly if custom merge is not a valid function', () => {
    const target = {
      letters: ['a', 'b'],
      people: {
        first: 'Alex',
        second: 'Bert',
      },
    };

    const source = {
      letters: ['c'],
      people: {
        first: 'Smith',
        second: 'Bertson',
        third: 'Car',
      },
    };

    const expected = {
      letters: ['a', 'b', 'c'],
      people: {
        first: 'Smith',
        second: 'Bertson',
        third: 'Car',
      },
    };

    const actual = merge(target, source);
    expect(actual).toEqual(expected);
  });

  it('copy symbol keys in target that do not exist on the target', () => {
    const mySymbol = Symbol();
    const src = { [mySymbol]: 'value1' };
    const target = {};

    const res = merge(target, src);

    expect(res[mySymbol]).toEqual('value1');
    expect(Object.getOwnPropertySymbols(res)).toEqual(Object.getOwnPropertySymbols(src));
  });

  it('copy symbol keys in target that do exist on the target', () => {
    const mySymbol = Symbol();
    const src = { [mySymbol]: 'value1' };
    const target = { [mySymbol]: 'wat' };

    const res = merge(target, src);

    expect(res[mySymbol]).toEqual('value1');
  });

  it('Falsey properties should be mergeable', () => {
    const uniqueValue = {};

    const target = {
      wat: false,
    };

    const source = {
      wat: false,
    };

    let customMergeWasCalled = false;

    const result = merge(target, source, {
      isMergeableObject: function () {
        return true;
      },
      customMerge: function () {
        return function () {
          customMergeWasCalled = true;
          return uniqueValue;
        };
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    expect(result.wat).toEqual(uniqueValue as any);
    expect(customMergeWasCalled).toBe(true);
  });

  describe(`all`, () => {
    it('throw error if first argument is not an array', () => {
      expect(merge.all.bind(null, { example: true }, { another: '2' })).toThrowError();
    });

    it('return an empty object if first argument is an array with no elements', () => {
      expect(merge.all([])).toEqual({});
    });

    it('Work just fine if first argument is an array with least than two elements', () => {
      const actual = merge.all([{ example: true }]);
      const expected = { example: true };
      expect(actual).toEqual(expected);
    });

    it('execute correctly if options object were not passed', () => {
      const arrayToMerge = [{ example: true }, { another: '123' }];
      expect(merge.all.bind(null, arrayToMerge)).not.toThrowError();
    });

    it('execute correctly if options object were passed', () => {
      const arrayToMerge = [{ example: true }, { another: '123' }];
      expect(merge.all.bind(null, arrayToMerge)).not.toThrowError();
    });

    it('invoke merge on every item in array should result with all props', () => {
      const firstObject = { first: true };
      const secondObject = { second: false };
      const thirdObject = { third: 123 };
      const fourthObject = { fourth: 'some string' };

      const mergedObject = merge.all<{ first: any; second: any; third: any; fourth: any }>([
        firstObject,
        secondObject,
        thirdObject,
        fourthObject,
      ]);

      expect(mergedObject.first).toBe(true);
      expect(mergedObject.second).toBe(false);
      expect(mergedObject.third).toBe(123);
      expect(mergedObject.fourth).toBe('some string');
    });

    it('invoke merge on every item in array with clone should clone all elements', () => {
      const firstObject = { a: { d: 123 } };
      const secondObject = { b: { e: true } };
      const thirdObject = { c: { f: 'string' } };

      const mergedWithClone = merge.all<{ a: any; b: any; c: any }>([firstObject, secondObject, thirdObject]);

      expect(mergedWithClone.a).not.toBe(firstObject.a);
      expect(mergedWithClone.b).not.toBe(secondObject.b);
      expect(mergedWithClone.c).not.toBe(thirdObject.c);
    });

    it('invoke merge on every item in array without clone should clone all elements', () => {
      const firstObject = { a: { d: 123 } };
      const secondObject = { b: { e: true } };
      const thirdObject = { c: { f: 'string' } };

      const mergedWithoutClone = merge.all<{ a: any; b: any; c: any }>([firstObject, secondObject, thirdObject]);

      expect(mergedWithoutClone.a).not.toBe(firstObject.a);
      expect(mergedWithoutClone.b).not.toBe(secondObject.b);
      expect(mergedWithoutClone.c).not.toBe(thirdObject.c);
    });
  });
});
