/**
 * Converts a PascalCase string to kebab-case. The function takes a string in PascalCase format, where each word starts with an uppercase letter and there are no separators between words, and transforms it into kebab-case format, where words are separated by hyphens and all letters are lowercase. It does this by splitting the input string into individual words based on the uppercase letters, converting each word to lowercase, and then joining the words together with hyphens.
 *
 * @param value - The input string in PascalCase format to be converted to kebab-case.
 * @returns A new string in kebab-case format.
 */
export function pascalToKebab(value: string): string {
  return value
    .split(/(?=[A-Z])/)
    .filter(Boolean)
    .map(word => word.toLowerCase())
    .join('-');
}
