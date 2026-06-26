import { isMergeableObject as defaultIsMergeableObject } from '../type-predicates/isMergeableObject.js';

interface MergeOptions {
  /**
   * The function to use for merging arrays. Defaults to concatenating the arrays
   */
  readonly arrayMerge: <X extends unknown[], Y extends unknown[]>(x: X, y: Y, options: MergeOptions) => X & Y;

  /**
   * The function to use for merging objects. Defaults to merging the objects
   */
  readonly customMerge?: (key: PropertyKey, options?: MergeOptions) => ((x: unknown, y: unknown) => unknown) | undefined;

  /**
   * The function to use for determining if a value is mergeable. Defaults to `isMergeableObject`.
   */
  readonly isMergeableObject: (value: unknown) => boolean;

  /**
   * Internal hook used to clone values before merging.
   */
  readonly cloneUnlessOtherwiseSpecified: (value: unknown, options: MergeOptions) => unknown;
}

/**
 * Recursively merges the properties of two objects together. The source object is merged into the target object, and a new object is returned. The merge is performed recursively, meaning that nested objects and arrays are also merged. The function handles various edge cases, such as merging arrays, handling non-mergeable objects, and preventing prototype pollution.
 *
 * @param x - The target object to merge into.
 * @param y - The source object to merge from.
 * @param options - Optional configuration for the merge operation, including custom array merging, custom object merging, and a custom function to determine if a value is mergeable.
 *
 * @returns A new object that is the result of merging the source object into the target object.
 */
function mergeImpl<X, Y>(x: readonly X[], y: readonly Y[], options?: Partial<MergeOptions>): (X | Y)[];
function mergeImpl<X, Y>(x: Partial<X>, y: Partial<Y>, options?: Partial<MergeOptions>): X & Y;
function mergeImpl<X, Y>(x: Partial<X>, y: Partial<Y>, options: Partial<MergeOptions> = {}): X & Y {
  const {
    arrayMerge = defaultArrayMerge,
    cloneUnlessOtherwiseSpecified = defaultCloneUnlessOtherwiseSpecified,
    isMergeableObject = defaultIsMergeableObject,
    customMerge,
  } = options;

  const newOptions: MergeOptions = {
    arrayMerge,
    cloneUnlessOtherwiseSpecified,
    isMergeableObject,
    customMerge,
  };

  const xIsArray = Array.isArray(x);
  const yIsArray = Array.isArray(y);

  if (xIsArray !== yIsArray) {
    return cloneUnlessOtherwiseSpecified(y, newOptions) as Y & X;
  } else if (xIsArray) {
    return arrayMerge(x as unknown[], y as unknown as unknown[], newOptions) as Y & X;
  }

  if (!isMergeableObject(x) || !isMergeableObject(y)) {
    return cloneUnlessOtherwiseSpecified(y, newOptions) as Y & X;
  }

  return mergeObject(x as object, y as object, newOptions) as Y & X;
}

export const merge = Object.assign(mergeImpl, {
  all<T>(array: Partial<T>[], options?: Partial<MergeOptions>): T {
    if (!Array.isArray(array)) {
      throw new Error('First argument should be an array');
    }

    let result = {} as T;

    for (let i = 0, l = array.length; i < l; i++) {
      result = merge(result as unknown as Partial<T>, array[i], options);
    }

    return result;
  },
});

function emptyTarget<T>(value: T): T[] | object {
  return Array.isArray(value) ? [] : {};
}

function defaultCloneUnlessOtherwiseSpecified<T>(value: T, options: MergeOptions): T {
  return options.isMergeableObject(value) || Array.isArray(value)
    ? merge(emptyTarget(value) as unknown as Partial<T>, value as unknown as Partial<T>, options)
    : value;
}

function defaultArrayMerge<X extends unknown[], Y extends unknown[]>(x: X, y: Y, options: MergeOptions): X & Y {
  const merged = x.concat(y);
  const cloned: unknown[] = merged.map(element => options.cloneUnlessOtherwiseSpecified(element, options));

  return cloned as X & Y;
}

function getMergeFunction(key: PropertyKey, options: MergeOptions): (x: unknown, y: unknown, options: MergeOptions) => unknown {
  if (!options.customMerge) {
    return merge as unknown as (x: unknown, y: unknown, options: MergeOptions) => unknown;
  }

  const customMerge = options.customMerge(key, options);

  return typeof customMerge === 'function' ? customMerge : (merge as unknown as (x: unknown, y: unknown, options: MergeOptions) => unknown);
}

function getEnumerableOwnPropertySymbols(target: object): symbol[] {
  const symbols = Object.getOwnPropertySymbols(target);

  const result: symbol[] = [];

  for (const symbol of symbols) {
    if (Object.prototype.propertyIsEnumerable.call(target, symbol)) {
      result.push(symbol);
    }
  }

  return result;
}

function getKeys(target: object): (string | symbol)[] {
  return [...Object.keys(target), ...getEnumerableOwnPropertySymbols(target)];
}

function propertyIsOnObject(object: object, property: PropertyKey): boolean {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target: object, key: PropertyKey): boolean {
  if (key === '__proto__' || key === 'prototype' || key === 'constructor') {
    return true;
  }

  return (
    propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
    !(
      Object.prototype.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
      Object.prototype.propertyIsEnumerable.call(target, key)
    )
  ); // and also unsafe if they're nonenumerable.
}

function mergeObject<X extends object, Y extends object>(x: X, y: Y, options: MergeOptions): X & Y {
  const destination = {} as X & Y;
  const xRecord = x as Record<PropertyKey, unknown>;
  const yRecord = y as Record<PropertyKey, unknown>;
  const destRecord = destination as Record<PropertyKey, unknown>;

  if (options.isMergeableObject(x)) {
    const xKeys = getKeys(x);

    for (let i = 0, l = xKeys.length; i < l; i++) {
      const key = xKeys[i];

      if (propertyIsUnsafe(x, key)) {
        continue;
      }

      destRecord[key] = options.cloneUnlessOtherwiseSpecified(xRecord[key], options);
    }
  }

  const yKeys = getKeys(y);

  for (let i = 0, l = yKeys.length; i < l; i++) {
    const key = yKeys[i];

    if (propertyIsUnsafe(x, key)) {
      continue;
    }

    if (propertyIsOnObject(x, key) && (options.isMergeableObject(yRecord[key]) || Array.isArray(yRecord[key]))) {
      destRecord[key] = getMergeFunction(key, options)(xRecord[key], yRecord[key], options);
    } else {
      destRecord[key] = options.cloneUnlessOtherwiseSpecified(yRecord[key], options);
    }
  }

  return destination;
}
