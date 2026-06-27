import { sum } from './sum.js';

/**
 * Calculates the average of an array of numbers.
 *
 * @param values - The array of numbers to calculate the average of.
 * @returns The average of the numbers in the array.
 */
export function average(values: number[]): number {
  const length = values.length;

  if (length === 0) {
    throw new Error('Cannot calculate average of an empty array');
  }

  return sum(values) / length;
}
