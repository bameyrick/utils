import { isNullOrUndefined } from './isNullOrUndefined.js';
import { typeOf } from './typeOf.js';

type EmptyString = '';
type EmptyObject = Record<string, never>;
type EmptyArray = never[];
type EmptySet = Set<never>;
type EmptyMap = Map<never, never>;

type Empty = EmptyArray | EmptyObject | EmptyString | EmptySet | EmptyMap;

type EmptyResult<T> = T extends string
  ? EmptyString
  : T extends unknown[]
    ? EmptyArray
    : T extends Set<unknown>
      ? EmptySet
      : T extends Map<unknown, unknown>
        ? EmptyMap
        : T extends object
          ? EmptyObject
          : never;

/**
 * Checks if a value is empty. A value is considered empty if it is `null`, `undefined`, an empty string (or whitespace-only string), an empty array, an empty object, an empty Set, or an empty Map.
 *
 * @param value - The value to check.
 * @returns `true` if the value is empty, otherwise `false`.
 */
export function isEmpty<T>(value: T | Empty | null | undefined): value is EmptyResult<T> | null | undefined {
  if (isNullOrUndefined(value)) {
    return true;
  }

  const type = typeOf(value);

  switch (type) {
    case 'set':
    case 'map': {
      return (value as Set<unknown> | Map<unknown, unknown>).size === 0;
    }
    case 'array': {
      return (value as unknown[]).length === 0;
    }
    case 'object': {
      const obj = value as object;
      return !Reflect.ownKeys(obj).some(k => Object.prototype.propertyIsEnumerable.call(obj, k));
    }
    case 'string': {
      return !(value as string).trim();
    }
    default: {
      return false;
    }
  }
}
