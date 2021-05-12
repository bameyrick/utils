/**
 * Returns a random whole number between a given range
 */
export function randomNumberBetweenRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
