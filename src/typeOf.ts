import { isArguments } from './isArguments.js';
import { isBuffer } from './isBuffer.js';
import { isDate } from './isDate.js';
import { isError } from './isError.js';
import { isGeneratorObject } from './isGeneratorObject.js';
import { isMoment } from './isMoment.js';
import { isRegExp } from './isRegExp.js';

export enum ValueType {
  undefined = 'undefined',
  null = 'null',
  boolean = 'boolean',
  string = 'string',
  number = 'number',
  symbol = 'symbol',
  function = 'function',
  array = 'array',
  buffer = 'buffer',
  arguments = 'arguments',
  date = 'date',
  error = 'error',
  regexp = 'regexp',
  promise = 'promise',
  weakmap = 'weakmap',
  weakset = 'weakset',
  map = 'map',
  set = 'set',
  int8array = 'int8array',
  uint8array = 'uint8array',
  uint8clampedarray = 'uint8clampedarray',
  int16array = 'int16array',
  uint16array = 'uint16array',
  int32array = 'int32array',
  uint32array = 'uint32array',
  float32array = 'float32array',
  float64array = 'float64array',
  bigint64array = 'bigint64array',
  biguint64array = 'biguint64array',
  generator = 'generator',
  object = 'object',
  mapiterator = 'mapiterator',
  setiterator = 'setiterator',
  stringiterator = 'stringiterator',
  arrayiterator = 'arrayiterator',
  generatorfunction = 'generatorfunction',
  moment = 'moment',
}

/**
 * Determines the type of the given value
 */
export function typeOf(value: any): ValueType | string {
  if (value === void 0) {
    return ValueType.undefined;
  }

  if (value === null) {
    return ValueType.null;
  }

  if (isMoment(value)) {
    return ValueType.moment;
  }

  let type: string = typeof value;

  if (type === 'boolean') {
    return ValueType.boolean;
  }

  if (type === 'string') {
    return ValueType.string;
  }

  if (type === 'number') {
    return ValueType.number;
  }

  if (type === 'symbol') {
    return ValueType.symbol;
  }

  if (type === 'function') {
    return isGeneratorFunction(value) ? ValueType.generatorfunction : ValueType.function;
  }

  if (Array.isArray(value)) {
    return ValueType.array;
  }

  if (isBuffer(value)) {
    return ValueType.buffer;
  }

  if (isArguments(value)) {
    return ValueType.arguments;
  }

  if (isDate(value)) {
    return ValueType.date;
  }

  if (isError(value)) {
    return ValueType.error;
  }

  if (isRegExp(value)) {
    return ValueType.regexp;
  }

  switch (constructorName(value)) {
    case 'Symbol': {
      return ValueType.symbol;
    }
    case 'Promise': {
      return ValueType.promise;
    }
    case 'WeakMap': {
      return ValueType.weakmap;
    }
    case 'WeakSet': {
      return ValueType.weakset;
    }
    case 'Map': {
      return ValueType.map;
    }
    case 'Set': {
      return ValueType.set;
    }
    case 'Int8Array': {
      return ValueType.int8array;
    }
    case 'Uint8Array': {
      return ValueType.uint8array;
    }
    case 'Uint8ClampedArray': {
      return ValueType.uint8clampedarray;
    }
    case 'Int16Array': {
      return ValueType.int16array;
    }
    case 'Uint16Array': {
      return ValueType.uint16array;
    }
    case 'Int32Array': {
      return ValueType.int32array;
    }
    case 'Uint32Array': {
      return ValueType.uint32array;
    }
    case 'Float32Array': {
      return ValueType.float32array;
    }
    case 'Float64Array': {
      return ValueType.float64array;
    }
    case 'BigInt64Array': {
      return ValueType.bigint64array;
    }
    case 'BigUint64Array': {
      return ValueType.biguint64array;
    }
  }

  if (isGeneratorObject(value)) {
    return ValueType.generator;
  }

  type = toString.call(value) as string;

  switch (type) {
    case '[object Object]': {
      return ValueType.object;
    }
    case '[object Map Iterator]': {
      return ValueType.mapiterator;
    }
    case '[object Set Iterator]': {
      return ValueType.setiterator;
    }
    case '[object String Iterator]': {
      return ValueType.stringiterator;
    }
    case '[object Array Iterator]': {
      return ValueType.arrayiterator;
    }
  }

  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function constructorName(value: any): string | null {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return typeof value.constructor === 'function' ? value.constructor.name : null;
}

function isGeneratorFunction(value: any): value is GeneratorFunction {
  const name = constructorName(value);

  return name === 'GeneratorFunction' || name === 'GeneratorFunction.js';
}
