/**
 * Determines whether the given value is a generator object.
 */
export function isGeneratorObject(value: any): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return typeof value.throw === 'function' && typeof value.return === 'function' && typeof value.next === 'function';
}
