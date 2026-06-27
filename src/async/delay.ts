/**
 * Returns a Promise that resolves after a specified duration.
 *
 * @param durationMs - The duration in milliseconds to wait. If omitted, resolves on the next event loop tick.
 * @returns A promise that resolves after the specified duration has elapsed.
 */
export function delay(durationMs?: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, durationMs));
}
