import { isNullOrUndefined } from '.';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Empty {
  export type String = '';
  export type Object = Record<string, never>;
  export type Array = never[];
}

type Empty = Empty.Array | Empty.Object | Empty.String;

type EmptyResult<T> = T extends string ? Empty.String : T extends any[] ? Empty.Array : T extends object ? Empty.Object : never;

/**
 * Checks if a given value is empty
 */
export function isEmpty<T extends string | any[] | object | null | undefined>(
  value: T | Empty | null | undefined
): value is EmptyResult<T> | null | undefined {
  if (isNullOrUndefined(value)) {
    return true;
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
