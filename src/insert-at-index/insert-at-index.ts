/**
 * Inserts a string value at a given index in a source string
 *
 * @param source - The source string to insert into.
 * @param value - The string value to insert.
 * @param index - The index at which to insert the value.
 * @returns The new string with the value inserted at the specified index.
 */
export function insertAtIndex({ source, value, index }: { source: string; value: string; index: number }): string {
  return `${source.slice(0, index)}${value}${source.slice(index)}`;
}
