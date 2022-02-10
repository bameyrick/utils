/**
 * Returns a random whole number between a given range
 */
export function randomNumberBetweenRange(min: number, max: number): number {
  max = parseInt(max as any, 10);
  min = parseInt(min as any, 10);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
