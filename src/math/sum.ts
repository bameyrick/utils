/**
 * Calculates the sum of an array of numbers.
 *
 * @param values - The array of numbers to calculate the sum of.
 * @returns The sum of the numbers in the array.
 */
export function sum(values: number[]): number {
  let total = 0;

  for (let i = 0, length = values.length; i < length; i++) {
    total += values[i];
  }

  return total;
}
