import { isNullOrUndefined } from './isNullOrUndefined.js';
import { typeOf } from './typeOf.js';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Empty {
  export type String = '';
  export type Object = Record<string, never>;
  export type Array = never[];
  export type _Set = Set<never>;
  export type _Map = Map<never, never>;
}

type Empty = Empty.Array | Empty.Object | Empty.String | Empty._Set | Empty._Map;

type EmptyResult<T> = T extends string
  ? Empty.String
  : T extends any[]
  ? Empty.Array
  : T extends Set<unknown>
  ? Empty._Set
  : T extends Map<unknown, unknown>
  ? Empty._Map
  : T extends object
  ? Empty.Object
  : never;

/**
 * Checks if a given value is empty
 */
export function isEmpty<T extends string | Set<unknown> | Map<unknown, unknown> | any[] | object | null | undefined>(
  value: T | Empty | null | undefined
): value is EmptyResult<T> | null | undefined {
  if (isNullOrUndefined(value)) {
    return true;
  }

  const type = typeOf(value);

  switch (type) {
    case 'set':
    case 'map': {
      return (value as Set<unknown> | Map<unknown, unknown>).size === 0;
    }
  }

  switch (typeof value) {
    case 'object': {
      return !Object.keys(value).length;
    }
    case 'string': {
      return !value.trim();
    }
    default: {
      return false;
    }
  }
}
