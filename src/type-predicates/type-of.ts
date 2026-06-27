import { isArguments } from './is-arguments.js';
import { isBuffer } from './is-buffer.js';
import { isDate } from './is-date.js';
import { isError } from './is-error.js';
import { isGeneratorObject } from './is-generator-object.js';
import { isRegExp } from './is-regexp.js';

export enum ValueType {
  Undefined = 'undefined',
  Null = 'null',
  Boolean = 'boolean',
  String = 'string',
  Number = 'number',
  Symbol = 'symbol',
  Function = 'function',
  Array = 'array',
  Buffer = 'buffer',
  Arguments = 'arguments',
  Date = 'date',
  Error = 'error',
  RegExp = 'regexp',
  Promise = 'promise',
  WeakMap = 'weakmap',
  WeakSet = 'weakset',
  Map = 'map',
  Set = 'set',
  Int8Array = 'int8array',
  Uint8Array = 'uint8array',
  Uint8ClampedArray = 'uint8clampedarray',
  Int16Array = 'int16array',
  Uint16Array = 'uint16array',
  Int32Array = 'int32array',
  Uint32Array = 'uint32array',
  Float32Array = 'float32array',
  Float64Array = 'float64array',
  BigInt64Array = 'bigint64array',
  BigUint64Array = 'biguint64array',
  Generator = 'generator',
  Object = 'object',
  MapIterator = 'mapiterator',
  SetIterator = 'setiterator',
  StringIterator = 'stringiterator',
  ArrayIterator = 'arrayiterator',
  GeneratorFunction = 'generatorfunction',
}

/**
 * Returns a normalised string describing the type of the given value.
 * Extends `typeof` with finer-grained detection for arrays, buffers,
 * `arguments` objects, dates, errors, regular expressions, typed arrays,
 * Maps, Sets, WeakMaps, WeakSets, Promises, iterators, and generator objects.
 *
 * @param value - The value whose type is to be determined.
 *
 * @returns A `ValueType` enum member, or a lower-cased intrinsic tag string
 * (derived from `Object.prototype.toString`) for types not covered by the enum.
 */
export function typeOf(value: unknown): ValueType | string {
  if (value === void 0) {
    return ValueType.Undefined;
  }

  if (value === null) {
    return ValueType.Null;
  }

  let type: string = typeof value;

  if (type === 'boolean') {
    return ValueType.Boolean;
  }

  if (type === 'string') {
    return ValueType.String;
  }

  if (type === 'number') {
    return ValueType.Number;
  }

  if (type === 'symbol') {
    return ValueType.Symbol;
  }

  if (type === 'function') {
    return isGeneratorFunction(value) ? ValueType.GeneratorFunction : ValueType.Function;
  }

  if (Array.isArray(value)) {
    return ValueType.Array;
  }

  if (isBuffer(value)) {
    return ValueType.Buffer;
  }

  if (isArguments(value)) {
    return ValueType.Arguments;
  }

  if (isDate(value)) {
    return ValueType.Date;
  }

  if (isError(value)) {
    return ValueType.Error;
  }

  if (isRegExp(value)) {
    return ValueType.RegExp;
  }

  switch (constructorName(value)) {
    case 'Symbol': {
      return ValueType.Symbol;
    }
    case 'Promise': {
      return ValueType.Promise;
    }
    case 'WeakMap': {
      return ValueType.WeakMap;
    }
    case 'WeakSet': {
      return ValueType.WeakSet;
    }
    case 'Map': {
      return ValueType.Map;
    }
    case 'Set': {
      return ValueType.Set;
    }
    case 'Int8Array': {
      return ValueType.Int8Array;
    }
    case 'Uint8Array': {
      return ValueType.Uint8Array;
    }
    case 'Uint8ClampedArray': {
      return ValueType.Uint8ClampedArray;
    }
    case 'Int16Array': {
      return ValueType.Int16Array;
    }
    case 'Uint16Array': {
      return ValueType.Uint16Array;
    }
    case 'Int32Array': {
      return ValueType.Int32Array;
    }
    case 'Uint32Array': {
      return ValueType.Uint32Array;
    }
    case 'Float32Array': {
      return ValueType.Float32Array;
    }
    case 'Float64Array': {
      return ValueType.Float64Array;
    }
    case 'BigInt64Array': {
      return ValueType.BigInt64Array;
    }
    case 'BigUint64Array': {
      return ValueType.BigUint64Array;
    }
  }

  if (isGeneratorObject(value)) {
    return ValueType.Generator;
  }

  type = Object.prototype.toString.call(value);

  switch (type) {
    case '[object Object]': {
      return ValueType.Object;
    }
    case '[object Map Iterator]': {
      return ValueType.MapIterator;
    }
    case '[object Set Iterator]': {
      return ValueType.SetIterator;
    }
    case '[object String Iterator]': {
      return ValueType.StringIterator;
    }
    case '[object Array Iterator]': {
      return ValueType.ArrayIterator;
    }
  }

  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function constructorName(value: unknown): string | null {
  if (value === null || (typeof value !== 'object' && typeof value !== 'function')) {
    return null;
  }

  const ctor = (value as Record<string, unknown>).constructor;

  if (typeof ctor !== 'function') {
    return null;
  }

  return (ctor as { name?: string }).name ?? null;
}

function isGeneratorFunction(value: unknown): value is GeneratorFunction {
  const name = constructorName(value);

  return name === 'GeneratorFunction' || name === 'GeneratorFunction.js';
}
