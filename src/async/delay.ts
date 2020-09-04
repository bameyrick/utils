/**
 * Delays an async function using await given an optionally provided duration
 */
export function delay(duration?: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, duration));
}
