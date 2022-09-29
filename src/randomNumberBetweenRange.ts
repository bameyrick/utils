/**
 * Returns a random whole number between a given range
 */
export function randomNumberBetweenRange(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  const value = Math.random() * (max - min + 1) + min;

  return Math.floor(value);
}
