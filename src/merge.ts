import { isMergeableObject } from './isMergableObject';

export interface MergeOptions {
  /**
   * The function to use for merging arrays. Defaults to concatenating the arrays
   */
  arrayMerge: <X extends unknown[], Y extends unknown[]>(x: X, y: Y, options: MergeOptions) => X & Y;

  /**
     * The function to use for merging objects. Defaults to merging the objects

   */
  customMerge?: (key: string, options?: MergeOptions) => ((x: any, y: any) => any) | undefined;

  /**
   * The function to use for determining if a value is mergeable. Defaults to isPlainObject
   */
  isMergeableObject: (value: any) => boolean;

  /**
   * NOT OVERRIDABLE
   */
  cloneUnlessOtherwiseSpecified: (value, options) => any;
}

/**
 * Merges two objects x and y deeply, returning a new merged object with the elements from both x and y.
 *
 * If an element at the same key is present for both x and y, the value from y will appear in the result.
 *
 * Merging creates a new object, so that neither x or y is modified.
 *
 * Note: By default, arrays are merged by concatenating them.
 */
export function merge<X, Y>(x: Partial<X>, y: Partial<Y>, options: Partial<MergeOptions> = {}): X & Y {
  if (!options.arrayMerge) {
    options.arrayMerge = defaultArrayMerge;
  }

  if (!options.isMergeableObject) {
    options.isMergeableObject = isMergeableObject;
  }

  /**
   * cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge() implementations can use it. The caller may not replace
   * it.
   */
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

  const xIsArray = Array.isArray(x);
  const yIsArray = Array.isArray(y);

  if (xIsArray !== yIsArray) {
    return cloneUnlessOtherwiseSpecified(y, options as MergeOptions) as Y & X;
  } else if (xIsArray) {
    return options.arrayMerge(x as unknown[], y as unknown as unknown[], options as MergeOptions) as Y & X;
  } else {
    return mergeObject(x as object, y as object, options as MergeOptions) as Y & X;
  }
}

merge.all = function mergeAll<T>(array: Partial<T>[], options?: Partial<MergeOptions>): T {
  if (!Array.isArray(array)) {
    throw new Error('First argument should be an array');
  }

  let result = {} as T;

  for (let i = 0, l = array.length; i < l; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    result = merge(result as any, array[i], options);
  }

  return result;
};

function emptyTarget<T>(value: T): T[] | object {
  return Array.isArray(value) ? [] : {};
}

function cloneUnlessOtherwiseSpecified<T>(value: T, options: MergeOptions): T {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return options.isMergeableObject(value) ? (merge(emptyTarget(value) as any, value as any, options) as T) : value;
}

function defaultArrayMerge<X extends unknown[], Y extends unknown[]>(x: X, y: Y, options: MergeOptions): X & Y {
  return x.concat(y).map(element => cloneUnlessOtherwiseSpecified(element, options)) as X & Y;
}

function getMergeFunction(key: string, options: MergeOptions) {
  if (!options.customMerge) {
    return merge;
  }

  const customMerge = options.customMerge(key);

  return typeof customMerge === 'function' ? customMerge : merge;
}

function getEnumerableOwnPropertySymbols<T extends object>(target: T): ConcatArray<string> {
  const symbols = Object.getOwnPropertySymbols(target);

  const result: symbol[] = [];

  for (const symbol of symbols) {
    if (Object.propertyIsEnumerable.call(target, symbol)) {
      result.push(symbol);
    }
  }

  return result as unknown as ConcatArray<string>;
}

function getKeys<T extends object>(target: T) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object: object, property: string): boolean {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target: object, key: string): boolean {
  return (
    propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
    !(
      Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
      Object.propertyIsEnumerable.call(target, key)
    )
  ); // and also unsafe if they're nonenumerable.
}

function mergeObject<X extends object, Y extends object>(x: X, y: Y, options: MergeOptions): X & Y {
  const destination = {} as X & Y;

  if (options.isMergeableObject(x)) {
    const xKeys = getKeys(x);

    for (let i = 0, l = xKeys.length; i < l; i++) {
      const key = xKeys[i];

      destination[key] = cloneUnlessOtherwiseSpecified(x[key], options) as X & Y;
    }
  }

  const yKeys = getKeys(y);

  for (let i = 0, l = yKeys.length; i < l; i++) {
    const key = yKeys[i];

    if (propertyIsUnsafe(x, key)) {
      break;
    }

    if (propertyIsOnObject(x, key) && options.isMergeableObject(y[key])) {
      destination[key] = getMergeFunction(key, options)(x[key], y[key], options) as X & Y;
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(y[key], options) as X & Y;
    }
  }

  return destination;
}
