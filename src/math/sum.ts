/**
 * Calculates the sum of the given values.
 */
export function sum(values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}
