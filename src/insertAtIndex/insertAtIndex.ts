/**
 * Inserts a string value at a given index in a source string
 */
export function insertAtIndex(source: string, value: string, index: number): string {
  return `${source.slice(0, index)}${value}${source.slice(index)}`;
}
