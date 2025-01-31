import { Moment } from 'moment';
import { isPlainObject } from '../type-predicates/isPlainObject.js';
import { typeOf, ValueType } from '../type-predicates/typeOf.js';

type InstanceClone<T> = ((value: T) => T) | boolean;

/**
 * Recursively (deep) clones native types, like Object, Array, RegExp, Date, Map, Set, Symbol, Error as well as primitives.
 */
export function clone<T>(value: T, instanceClone: InstanceClone<T> = false): T {
  switch (typeOf(value)) {
    case ValueType.object: {
      return cloneObjectDeep(value, instanceClone);
    }
    case ValueType.array:
    case ValueType.int8array:
    case ValueType.uint8array:
    case ValueType.uint8clampedarray:
    case ValueType.int16array:
    case ValueType.uint16array:
    case ValueType.int32array:
    case ValueType.uint32array:
    case ValueType.float32array:
    case ValueType.float64array:
    case ValueType.bigint64array:
    case ValueType.biguint64array: {
      return cloneArrayDeep(value, instanceClone);
    }
    default: {
      return cloneShallow(value);
    }
  }
}

function cloneShallow<T>(value: T): T {
  switch (typeOf(value)) {
    case ValueType.buffer: {
      return cloneBuffer(value as Buffer) as unknown as T;
    }
    case ValueType.symbol: {
      return cloneSymbol(value as symbol) as unknown as T;
    }
    case ValueType.error: {
      return Object.create(value as Error) as unknown as T;
    }
    case ValueType.map: {
      return new Map(value as Map<any, any>) as unknown as T;
    }
    case ValueType.set: {
      return new Set(value as Set<any>) as unknown as T;
    }
    case ValueType.date: {
      return new Date(value as Date) as unknown as T;
    }
    case ValueType.regexp: {
      return cloneRegExp(value as unknown as RegExp) as unknown as T;
    }
    case ValueType.moment: {
      return (value as Moment).clone() as T;
    }
  }

  return value;
}

function cloneObjectDeep<T>(value: T, instanceClone?: InstanceClone<T>): T {
  if (typeof instanceClone === 'function') {
    return instanceClone(value);
  }

  if (instanceClone || isPlainObject(value)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const cloned = new (value as any).constructor();

    for (const key in value) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      cloned[key] = clone(value[key]);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return cloned;
  }

  return value;
}

function cloneArrayDeep<T>(value: T, instanceClone?: InstanceClone<T>): T {
  const length = (value as unknown[]).length;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const cloned = new (value as any).constructor(length) as unknown[];

  for (let i = 0; i < length; i++) {
    cloned[i] = clone(value[i], instanceClone);
  }

  return cloned as T;
}

function cloneRegExp(value: RegExp): RegExp {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const cloned = new (value as any).constructor(value.source, value.flags) as RegExp;

  cloned.lastIndex = value.lastIndex;

  return cloned;
}

function cloneBuffer(value: Buffer): Buffer {
  const length = value.length;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const buffer = Buffer.allocUnsafe ? Buffer.allocUnsafe(length) : Buffer.from(length as any);

  value.copy(buffer);

  return buffer;
}

// eslint-disable-next-line @typescript-eslint/unbound-method
const valueOf = Symbol.prototype.valueOf;

function cloneSymbol(value: symbol): symbol {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return valueOf ? Object(valueOf.call(value)) : {};
}
