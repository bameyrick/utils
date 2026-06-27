/**
 * Returns a random whole number between `min` and `max` (inclusive).
 *
 * Non-integer inputs are rounded to an integer range using `Math.ceil(min)` and `Math.floor(max)`.
 *
 * @param min - The minimum number in the range.
 * @param max - The maximum number in the range.
 * @returns A random whole number between the given range.
 * @throws Will throw an error if `min`/`max` are not finite, if the rounded bounds are outside the safe integer range, if no whole number exists between the rounded `min` and `max`, or if the resulting integer range is larger than `Number.MAX_SAFE_INTEGER`.
 */
export function randomNumberBetweenRange(min: number, max: number): number {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  const errorMessage = `Cannot generate a whole number between ${min} and ${max}`;

  if (
    !Number.isFinite(minCeil) ||
    !Number.isFinite(maxFloor) ||
    !Number.isSafeInteger(minCeil) ||
    !Number.isSafeInteger(maxFloor) ||
    minCeil > maxFloor
  ) {
    throw new Error(errorMessage);
  }

  const range = maxFloor - minCeil + 1;

  if (!Number.isSafeInteger(range) || range <= 0) {
    throw new Error(errorMessage);
  }

  const randomOffset = Math.floor(Math.random() * range);

  return randomOffset + minCeil;
}
