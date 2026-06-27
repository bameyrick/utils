import { isNullOrUndefined } from '../type-predicates/is-null-or-undefined.js';
import { SortMappingFunction } from './sort-mapping-function.model.js';

/**
 * Creates a comparator function suitable for use with `Array.prototype.sort`.
 *
 * Each argument can be a property path string or a `SortMappingFunction`:
 * - A plain path (e.g. `'name'`) sorts ascending by that property.
 * - A path prefixed with `'-'` (e.g. `'-age'`) sorts descending.
 * - A path suffixed with `'^'` (e.g. `'name^'`) performs a case-insensitive sort.
 * - The special path `'^'` sorts the items themselves (not a nested property).
 * - Dot-notation is supported for nested properties (e.g. `'address.city'`).
 * - Multiple properties are applied left-to-right as tie-breakers.
 * - An optional `SortMappingFunction` can be provided to transform values
 *   before comparison.
 *
 * @param properties - One or more property paths and/or a mapping function.
 *
 * @returns A comparator `(a, b) => number` for use with `Array.prototype.sort`.
 */
export function sortBy<T = unknown>(...properties: (string | SortMappingFunction)[]): (object1: T, object2: T) => number {
  let props = properties.filter((prop): prop is string => typeof prop === 'string');
  const map = properties.find((prop): prop is SortMappingFunction => typeof prop === 'function');

  if (props.length) {
    props = props.map(prop => (prop.replace('-', '').length ? prop : '-^'));
  } else {
    props = ['^'];
  }

  const comparators = props.map(prop => sort(prop, map));
  const numberOfComparators = comparators.length;

  return (object1: T, object2: T): number => {
    let index = 0;
    let result = 0;

    while (result === 0 && index < numberOfComparators) {
      result = comparators[index](object1, object2);
      index += 1;
    }

    return result;
  };
}

/**
 * Does the sort calculation for an item
 */
function sort(property: string, map?: SortMappingFunction): (a: unknown, b: unknown) => number {
  let prop = property;
  let sortOrder = 1;

  if (prop.startsWith('-')) {
    sortOrder = -1;
    prop = prop.substring(1);
  }

  const baseApply: SortMappingFunction = map ?? ((_key: string, value: unknown): unknown => value);
  let apply: SortMappingFunction = baseApply;

  if (prop.endsWith('^')) {
    prop = prop.substring(0, prop.length - 1);

    apply = (_key: string, value: unknown): unknown => {
      const mapped = baseApply(_key, value);
      return typeof mapped === 'string' ? mapped.toLowerCase() : mapped;
    };
  }

  const getValue = prop ? buildObjectPathGetter(prop) : (obj: unknown): unknown => obj;

  return (a: unknown, b: unknown): number => {
    let result = 0;

    const mappedA = cast(apply(property, getValue(a)));
    const mappedB = cast(apply(property, getValue(b)));

    // Treat missing values ('' / null / undefined) as lowest so they sort first for ascending sorts (and last for descending sorts).
    const aMissing = mappedA === '' || isNullOrUndefined(mappedA);
    const bMissing = mappedB === '' || isNullOrUndefined(mappedB);

    if (aMissing && !bMissing) {
      result = -1;
    } else if (!aMissing && bMissing) {
      result = 1;
    } else if (typeof mappedA === 'string' || typeof mappedB === 'string' || typeof mappedA === 'symbol' || typeof mappedB === 'symbol') {
      result = String(mappedA).localeCompare(String(mappedB));
    } else if ((mappedA as number) < (mappedB as number)) {
      result = -1;
    } else if ((mappedA as number) > (mappedB as number)) {
      result = 1;
    }

    return result * sortOrder;
  };
}

/**
 * Builds an accessor for a dotted object path and reuses split path parts.
 */
function buildObjectPathGetter(path: string): (object: unknown) => unknown {
  const pathParts = path.split('.');

  return (object: unknown): unknown => {
    if (isNullOrUndefined(object)) {
      return '';
    }

    return objectPath(object as Record<string, unknown>, pathParts);
  };
}

/**
 * Navigates to the part of the object using path parts provided.
 */
function objectPath(object: Record<string, unknown>, pathParts: string[]): unknown {
  let result: Record<string, unknown> = object;

  for (let index = 0, { length } = pathParts; index < length; index += 1) {
    const next: unknown = result[pathParts[index]];

    if (isNullOrUndefined(next)) {
      return '';
    }

    result = next as Record<string, unknown>;
  }

  return result;
}

/**
 * Takes a value and casts it for more effective sorting.
 */
function cast(value: unknown): unknown {
  // If the value is a number as a string, cast back to an actual number to sort
  if (typeof value === 'string' && !!value.trim().length) {
    const n = Number(value);

    if (!isNaN(n)) {
      return n;
    }
  }

  return value;
}
