/**
 * Calculates the sum of an array of numbers.
 *
 * @param values - The array of numbers to calculate the sum of.
 * @returns The sum of the numbers in the array.
 */
export function sum(values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}
