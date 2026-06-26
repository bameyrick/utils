/**
 * A function that maps a property value to a sortable representation.
 * Passed as the last argument to `sortBy` to customise how values are
 * compared before sorting.
 *
 * @param key - The raw path string being sorted on (e.g. `'name'`, `'address.city'`, `'^'`).
 *   This is always the path as supplied to `sortBy`, not a `keyof T`, because `sortBy`
 *   supports dotted paths and the special `'^'` sentinel.
 * @param value - The resolved property value for the current item.
 *
 * @returns The transformed value used for comparison.
 */
export type SortMappingFunction = (key: string, value: unknown) => unknown;
