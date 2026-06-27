/**
 * Checks if a value is a generator object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a generator object, otherwise `false`.
 */
export function isGeneratorObject(value: unknown): boolean {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  const obj = value as Record<string, unknown>;

  return typeof obj['throw'] === 'function' && typeof obj['return'] === 'function' && typeof obj['next'] === 'function';
}
