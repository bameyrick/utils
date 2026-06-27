import { capitaliseFirst } from './capitalise-first.js';

/**
 * Converts a kebab-case word to PascalCase
 *
 * @param value the kebab-case word to convert
 * @returns the PascalCase version of the word
 */
export function kebabToPascal(value: string): string {
  return value
    .split('-')
    .map(word => capitaliseFirst(word))
    .join('');
}
