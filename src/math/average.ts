import { sum } from './sum';

export function average(values: number[]): number {
  const length = values.length;

  if (length === 0) {
    throw new Error('Cannot calculate average of an empty array');
  }

  return sum(values) / length;
}
