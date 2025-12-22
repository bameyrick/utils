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
    case ValueType.map: {
      return cloneMapDeep(value as unknown as Map<unknown, unknown>, instanceClone as unknown as InstanceClone<unknown>) as unknown as T;
    }
    case ValueType.set: {
      return cloneSetDeep(value as unknown as Set<unknown>, instanceClone as unknown as InstanceClone<unknown>) as unknown as T;
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
    const source = value as unknown as Record<string, unknown>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const ctor = (value as any).constructor as (new () => unknown) | undefined;
    const cloned = (ctor === undefined ? Object.create(null) : new ctor()) as Record<string, unknown>;

    // Only clone own enumerable properties (matches `isEqual` semantics)
    for (const key of Object.keys(source)) {
      cloned[key] = clone(source[key], instanceClone as unknown as InstanceClone<unknown>);
    }

    return cloned as unknown as T;
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

function cloneMapDeep<K, V>(value: Map<K, V>, instanceClone?: InstanceClone<unknown>): Map<K, V> {
  const cloned = new Map<K, V>();
  const nestedInstanceClone = instanceClone as unknown as InstanceClone<any>;

  for (const [key, item] of value.entries()) {
    const clonedKey = clone(key, nestedInstanceClone as unknown as InstanceClone<K>);
    const clonedValue = clone(item, nestedInstanceClone as unknown as InstanceClone<V>);
    cloned.set(clonedKey, clonedValue);
  }

  return cloned;
}

function cloneSetDeep<T>(value: Set<T>, instanceClone?: InstanceClone<unknown>): Set<T> {
  const cloned = new Set<T>();
  const nestedInstanceClone = instanceClone as unknown as InstanceClone<any>;

  for (const item of value.values()) {
    cloned.add(clone(item, nestedInstanceClone as unknown as InstanceClone<T>));
  }

  return cloned;
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

function cloneSymbol(value: symbol): symbol {
  // Symbols are primitives and cannot be truly cloned; create a new symbol with the same description.
  const description = value.description;

  // Preserve well-known symbols (they cannot be recreated)
  const wellKnownSymbolKeys = [
    'asyncIterator',
    'hasInstance',
    'isConcatSpreadable',
    'iterator',
    'match',
    'matchAll',
    'replace',
    'search',
    'species',
    'split',
    'toPrimitive',
    'toStringTag',
    'unscopables',
    'dispose',
    'asyncDispose',
  ] as const;

  for (const key of wellKnownSymbolKeys) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if ((Symbol as any)[key] === value) {
      return value;
    }
  }

  return Symbol(description);
}
